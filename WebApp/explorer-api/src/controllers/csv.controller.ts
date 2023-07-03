import * as csvService from "../services/csv.service";

/**
 * input parameters has to be type any because in the types from express doens't exists req.files 
 * 
 * Gets from the request
 *          @filePath path of the csv file
 *          @csvType type of csv
 *
 * If everthing goes well
 *      - return status 200 with the result
 * On error
 *      - return status 500 and Error message
 */
export async function readCsv(req: any, res: any, next: any) {
    const filePath = req.files["uploadedFile"][0].path;
    const csvType = req.params.csvType;

    try {
        const result = await csvService.parseCsv(filePath, csvType);
        
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
    
}