import * as biosampleService from "../services/biosample.service";
import * as participantService from "../services/participant.service";
import * as biosampleParser from "../parsers/biosample.parser";

import { parse } from 'csv-parse';
import getStream from 'get-stream';

const fs = require('fs');

/**
 * Classify csv and call the corresponding function to parse and adapt the data and in the end store it in DB
 * 
 * @param  {string} filePath
 * @param  {string} csvType
 */
export async function parseCsv(filePath: string, csvType: string) {
    const parseStream = parse({ delimiter: ',', columns: true});
    const parsedRawData: participantBiosampleCsvRawRow[] =  await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
    
    try {
        switch (csvType) {
            case "participant_biosample": {
                try {
                    // TODO: devData ONLY FOR DEV
                    const devData = [parsedRawData[6], parsedRawData[7]];

                    // const data = fileRows;
                    const finalData = devData;
                    console.log("Data:", finalData);

                    // check the data
                    const check = await biosampleParser.checkParticipantBiosample(finalData);
                    console.log("Check:", check);

                    if (!check.allFound) {
                        // List of column name which will be create automatically 
                        const toCreate = ["location"];

                        // Object with functions, to be more flexible in the future for changing the default columns to be created with data that are not in DB
                        const functions: { [key: string]: any} = {
                            "race": await participantService.createMultipleRace,
                            "gender": await participantService.createMultipleGender,
                            "category": await participantService.createMultipleCategory,

                            "tubeType": await biosampleService.createMultipleTubeType,
                            "biosource": await biosampleService.createMultipleBiosource,
                            "temperature": await biosampleService.createMultipleTemperature,
                            "status": await biosampleService.createMultipleStatus,
                            "study": await biosampleService.createMultipleStudy,
                        };

                        let createManuallyError = false;
                        const createManuallyObject: { [key: string]: any } = { };
                        for (let key in check.values) {
                            if (!toCreate.includes(key) && check.values[key]) {
                                createManuallyError = true;
                                createManuallyObject[key] = check.values[key];
                            }
                        }

                        if (createManuallyError) {
                            // throw error to the try/catch of the case
                            throw `Create manually ${JSON.stringify(createManuallyObject)}`
                        }
                        // For loop going through the keys in check.values to see which columns are not in DB 
                        // and if is included in the list to Create and call the corresponding function and creates those data.
                        // method from link: https://stackoverflow.com/questions/62446219/typescript-javascript-call-function-by-string-name
                        for (let key in check.values) {
                            console.log(check.values[key]);
                            if (toCreate.includes(key)) {
                                const result = functions[key](check.values[key]);
                            }
                        }

                    } else {
                        // Put the data in database knowing that every relational tables exists
                        const result = await biosampleService.createMultipleParticipantBiosample(finalData);
                        return result;
                    }

                } catch(err) {
                    // throw error to the try/catch of the switch
                    throw err;
                }
                break;
            } 
        } 
    } catch (err) {
        // throw error out of the function
        throw err;
    }
}
