import * as biosampleService from "../services/biosample.service";
import * as participantService from "../services/participant.service";
import {
    Prisma,
    Race,
    Gender,
    Category,
    TubeType,
    Biosource,
    Temperature,
    Status,
    Study
} from "@prisma/client";

/**
 * Check if in the csv file has void cells and if essential data (race, gender, category, 
 * tubeType, biosource, storage temperature, location, status and study) exists in DB
 * 
 * @param  {participantBiosampleCsvRawRow[]} data raw row of the csv file
 * @returns {Promise<participantBiosampleCheck>}
 */
export async function checkParticipantBiosample(data: participantBiosampleCsvRawRow[]):Promise<participantBiosampleCheck> {
    let metadata: participantBiosampleCheck = {
        allFound: true,
        values: { } 
    };

    // Optional columns
    const optional = ["Study", "Collaborator", "Race", "DateOfBirth", "Diagnosis", "TubeType", "DrawTime", "ProcessingStartTime", "Freezing Time", "ProcessedBy", "Location", "StorageTemperature", "Notes"];
    //const requiered = ["ParticipantInternalID", "ParticipantExternalID", "BiosampleID", "Relationship", "Biosource", "Status", "StatusDate"];
            

    for (let i = 0; i < data.length; i++) {
        const row = data[i];

        try {
            // check if some cell is '', null or undefined
            Object.keys(row).map( ( key: any ) => {
                const rowKey: keyof participantBiosampleCsvRawRow  = key;
                const cell = row[rowKey];
                if (!cell && !optional.includes(key)) throw `Missing data in ${key}`;
            })
            // check if exists in db, if not, it adds to metadata.values.* the value.
            //let sampleId = await biosampleService.getBiosampleByBiosampleIdentification(row.ParticipantInternalID) ? true : false;
            
            //////////////////////////
            //         Race         //
            //////////////////////////
            let race: Race | null = await participantService.getRaceByName(row.Race);

            if (!race) {
                metadata.allFound = false;
                
                if (!metadata.values.race) metadata.values.race = [];
                
                // Check if race is already in the list to be created
                if (!metadata.values.race.filter( (x: any) => x.name == row.Race).length) {
                    const newRace: Prisma.RaceCreateInput = {
                        name: row.Race,
                    };
                    
                metadata.values.race.push(newRace);
                }
            }

            //////////////////////////
            //        Gender        //
            //////////////////////////
            let gender: Gender | null = await participantService.getGenderByName(row.Gender);

            if (!gender) {
                metadata.allFound = false;
                
                if (!metadata.values.gender) metadata.values.gender = [];
                
                // Check if gender is already in the list to be created
                if (!metadata.values.gender.filter( (x: any) => x.name == row.Gender).length) {
                    const newGender: Prisma.GenderCreateInput = {
                        name: row.Gender,
                    }

                    metadata.values.gender.push(newGender);
                }
            }

            //////////////////////////
            //       Category       //
            //////////////////////////
            let category: Category | null = await participantService.getCategoryByName(row.Relationship);

            if (!category) {
                metadata.allFound = false;
                
                if (!metadata.values.category) metadata.values.category = [];
                
                // Check if category is already in the list to be created
                if (!metadata.values.category.filter( (x: any) => row.Relationship).length) {
                    const newCategory: Prisma.CategoryCreateInput = {
                        name: row.Relationship,
                    }

                    metadata.values.category.push(newCategory);
                }
            }

            //////////////////////////
            //       Tube Type      //
            //////////////////////////
            let tubeType: TubeType | null = await biosampleService.getTubeTypeByName(row.TubeType);

            if (!tubeType) {
                metadata.allFound = false;
                
                if (!metadata.values.tubeType) metadata.values.tubeType = [];

                // Check if tubeType is already in the list to be created
                if (!metadata.values.tubeType.filter( (x: any) => x.name == row.TubeType).length) {
                    const newTubeType: Prisma.TubeTypeCreateInput = {
                        name: row.TubeType,
                    }

                    metadata.values.tubeType.push(newTubeType);
                }
            }

            //////////////////////////
            //       Biosource      //
            //////////////////////////
            let biosource: Biosource | null = await biosampleService.getBiosourceByName(row.Biosource);

            if (!biosource) {
                metadata.allFound = false;
                
                if (!metadata.values.biosource) metadata.values.biosource = [];
                
                // Check if biosource is already in the list to be created
                if (!metadata.values.biosource.filter( (x: any) => x.name == row.Biosource).length) {
                    const newBiosource: Prisma.BiosourceCreateInput = {
                        name: row.Biosource,
                    }
                    metadata.values.biosource.push(newBiosource);
                }
            }

            //////////////////////////
            //        Storage       //
            //      Temperature     //
            //////////////////////////
            let storageTemperature: Temperature | null = await biosampleService.getTemperatureByNumber(Number(row.StorageTemperature));

            if (!storageTemperature) {
                metadata.allFound = false;
                
                if (!metadata.values.temperature) metadata.values.temperature = [];
                
                // Check if temperature is already in the list to be created
                if (!metadata.values.temperature.filter( (x: any) => x.number == row.StorageTemperature).length) {
                    const newTemperature: Prisma.TemperatureCreateInput = {
                        number: Number(row.StorageTemperature),
                    }

                    metadata.values.temperature.push(newTemperature);
                }

                storageTemperature = await biosampleService.getTemperatureByNumber(Number(row.StorageTemperature))
            }

            //////////////////////////
            //        Status        //
            //////////////////////////
            let status: Status | null = await biosampleService.getStatusByName(row.Status);

            if (!status) {
                metadata.allFound = false;
                
                if (!metadata.values.status) metadata.values.status = [];
                
                // Check if status is already in the list to be created
                if (!metadata.values.status.filter( (x: any) => x.name == row.Status).length) {
                    const newStatus: Prisma.StatusCreateInput = {
                        name: row.Status,
                    }

                    metadata.values.status.push(newStatus);
                }
            }

            //////////////////////////
            //         Study        //
            //////////////////////////
            let study: Study | null = await biosampleService.getStudyByName(row.Study);

            if (!study) {
                metadata.allFound = false;
                
                if (!metadata.values.study) metadata.values.study = [];
                
                // Check if study is already in the list to be created
                if (!metadata.values.study.filter( (x: any) => x.name == row.Study).length) {
                    const newStudy: Prisma.StudyCreateInput = {
                        name: row.Study,
                    }

                    metadata.values.study.push(newStudy);
                }
            }
                
        } catch (err) {
            throw err;
        }
    }
    return metadata;
}

/**
 * Parse the raw row of the csv file and convert it into ids
 * 
 * @param  {participantBiosampleCsvRawRow[]} data raw row data of the csv file
 * @returns {Promise<Prisma.BiosampleCreateManyInput[]>}
 */
export async function getParsedBiosample(data: participantBiosampleCsvRawRow[]): Promise<Prisma.BiosampleCreateManyInput[]> {
    let biosampleData: Prisma.BiosampleCreateManyInput[] = [];

    for (let i = 0; i < data.length; i++) {
        const row = data[i];

        // Get information ids of others tables from the database
        let biosource = await biosampleService.getBiosourceByName(row.Biosource);
        let temperature = await biosampleService.getTemperatureByNumber(Number(row.StorageTemperature))
        let tubeType = await biosampleService.getTubeTypeByName(row.TubeType);
        let status = await biosampleService.getStatusByName(row.Status);
        let study = await biosampleService.getStudyByName(row.Study);

        // Create draw time (hh:mm)
        const drawTimeList = row.DrawTime.split(":");
        let drawTime = new Date();
        drawTime.setUTCHours(Number(drawTimeList[0]), Number(drawTimeList[1]));
        
        // Create processing start time (hh:mm)
        const processingStartTimeList = row.ProcessingStartTime.split(":");
        let processingStartTime = new Date();
        processingStartTime.setUTCHours(Number(processingStartTimeList[0]), Number(processingStartTimeList[1]));

        // Create freezing time (hh:mm)
        const freezingTimeList = row.FreezingTime.split(":");
        let freezingTime = new Date();
        freezingTime.setUTCHours(Number(freezingTimeList[0]), Number(freezingTimeList[1]));
        
        // Add to biosampleData the final information to be store in DB (biosample table) of one row
        biosampleData.push({
            biosampleId: row.BiosampleID,
            biosourceId: biosource!.id,
            collaborator: row.Collaborator,
            location: row.Location,
            temperatureId: temperature!.id,
            tubeTypeId: tubeType!.id,
            studyId: study!.id,
            drawTime: drawTime,
            processingStartTime: processingStartTime,
            freezingTime: freezingTime,
            processBy: row.ProcessedBy,
            notes: row.Notes,
            statusId: status!.id,
            statusDate: new Date(row.StatusDate),
        })
    }
    return biosampleData;
}

/**
 * Create an object for the database table ParticipantBiosample
 * 
 * @param  {participantBiosampleCsvRawRow[]} data
 * @param  {number[]} biosampleIds
 * @param  {number[]} participantIds
 * @returns {Promise<Prisma.ParticipantBiosampleCreateManyInput[]>}
 */
export async function getParsedParticipantBiosample(data: participantBiosampleCsvRawRow[], biosampleIds: number[], participantIds: number[]): Promise<Prisma.ParticipantBiosampleCreateManyInput[]> {
    const participantBiosampleData: Prisma.ParticipantBiosampleCreateManyInput[] = [];

    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        
        // Add to participantBiosampleDate the final information to be store in DB (participantBiosample table) of one row
        participantBiosampleData.push({
            participantId: participantIds[i],
            biosampleId: biosampleIds[i],
            dateOfSampling: new Date(row.DateOfSampling),
        })
    }
    return participantBiosampleData;
}