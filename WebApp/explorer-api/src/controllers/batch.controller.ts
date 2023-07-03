import { Request, Response } from "express";

import * as batchService from "../services/batch.service";

//########################
//#        Batch         #
//########################

//------------------------
//-    Bioinformatic     -
//-       pipeline       -
//------------------------

/**
 * BioinformaticPipeline controller getting the id and call the service for the data,
 * 
 * Gets from the request
 *          @bioinformaticPipelineId from the req.params
 * If everthing goes well
 *      - return status 200 with the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getBioinformaticPipeline (req: Request, res: Response): Promise<Response> {
    try {
        const bioinformaticPipelineId = Number(req.params.id);

        if (!bioinformaticPipelineId) return res.status(400).json("Missing data");

        const result = await batchService.getBioinformaticPipeline(bioinformaticPipelineId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting bioinformatic pipeline by id");
    }
}

/**
 * BioinformaticPipeline controller getting all the data and call the service for the data,
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllBioinformaticPipelines (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllBioinformaticPipelines();

        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all bioinformatic pipeline");
    }
}

/**
 * BioinformaticPipeline controller getting the "name" and call the service to create it,
 * 
 * Gets from the request
 *          @bioinformaticPipelineName
 * 
 * If everthing goes well
 *      - return status 200 with the created data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createBioinformaticPipeline (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await batchService.createBioinformaticPipeline(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating bioinformatic pipeline");
    }
}

/**
 * BioinformaticPipeline controller getting the id and the "name" and call the service to update it,
 * 
 * If everthing goes well
 *      return status 200 with the updated data
 * On error
 *      return status 400 if there is missing data
 *      return status 500 and Error message
 */
export async function updateBioinformaticPipeline (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await batchService.updateBioinformaticPipeline(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating bioinformatic pipeline");
    }
}

/**
 * BioinformaticPipeline controller getting the id and the "name" and call the service to update it,
 * 
 * Gets from the request
 *          @bioinformaticId from req.params
 * 
 * If everthing goes well
 *      - return status 200 with the updated data
 * On error
 *      - return status 500 and Error message
 */
export async function deleteBioinformaticPipeline (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = batchService.deleteBioinformaticPipeline(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting bioinformatic pipeline");
    }
}

//------------------------
//-        Batch         -
//------------------------
/**
 * Batch controller getting the id and the "batchId" and call the service to get it,
 * 
 * Gets from the request
 *          @batchId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getBatch (req: Request, res: Response): Promise<Response> {
    try {
        const batchId = Number(req.params.id);

        if (!batchId) return res.status(400).json("Missing data");

        const result = await batchService.getBatch(batchId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting batch by id");
    }
}

/**
 * Batch controller call the service to get all the batches
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllBatches (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllBatches();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all batches");
    }
}

/**
 * Batch controller call the service to create the batches
 * 
 * Gets from the request
 *          @batchId
 *          @deliveryDate
 *          @studyId
 *          @proprocessId
 *          @bioinformaticPipelineId
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createBatch (req: Request, res: Response): Promise<Response> {
    try {
        const batchId = String(req.body.batchId);
        const deliveryDate = new Date(req.body.deliveryDate);
        const studyId = Number(req.body.studyId);
        const preprocessId = Number(req.body.preprocessId);
        const bioinformaticPipelineId = Number(req.body.bioinformaticPipelineId);

        if (!batchId || !deliveryDate || !studyId || !preprocessId || !bioinformaticPipelineId) return res.status(400).json("Missing data");

        const result = await batchService.createBatch(batchId, deliveryDate, studyId, preprocessId, bioinformaticPipelineId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating batch");
    }
}

/**
 * Batch controller call the service to update the batch
 * 
 * Gets from the request 
 *          @batchId from the req.params
 *          @batchId
 *          @deliveryDate
 *          @studyId
 *          @proprocessId
 *          @bioinformaticPipelineId
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateBatch (req: Request, res: Response): Promise<Response> {
    try {
        const batchIdDB = Number(req.params.id);
        const batchId = String(req.body.batchId);
        const deliveryDate = new Date(req.body.deliveryDate);
        const studyId = Number(req.body.studyId);
        const preprocessId = Number(req.body.preprocessId);
        const bioinformaticPipelineId = Number(req.body.bioinformaticPipelineId);

        if (!batchId || !batchId || !deliveryDate || !studyId || !preprocessId || !bioinformaticPipelineId) return res.status(400).json("Missing data");

        const result = await batchService.updateBatch(batchIdDB, batchId, deliveryDate, studyId, preprocessId, bioinformaticPipelineId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating batch");
    }
}

/**
 * Batch controller call the service to delete the batch
 * 
 * Gets from the request 
 *          @batchId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 500 and Error message
 */
export async function deleteBatch (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await batchService.deleteBatch(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting batch");
    }
}
//########################
//#      Preprocess      #
//########################

//------------------------
//-      Preprocess      -
//------------------------

/**
 * Preprocess controller call the service to get the preprocess
 * 
 * Gets from the request
 *          @batchId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPreprocess (req: Request, res: Response): Promise<Response> {
    try {
        const preprocessId = Number(req.params.id);

        if (!preprocessId) return res.status(400).json("Missing data");

        const result = await batchService.getPreprocess(preprocessId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting preprocess by id");
    }
}

/**
 * Preprocess controller call the service to get all preprocesses
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPreprocesses (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllPreprocesses();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all preprocesses");
    }
}

/**
 * Preprocess controller call the service to create the preprocess
 * 
 * Gets from the request.body 
 *          @centerId
 *          @ngsTypeId
 *          @libraryPrepKitId
 *          @platformId
 *          @softwareId
 * 
 * If everthing goes well
 *      - return status 200 with the created preprocess
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPreprocess (req: Request, res: Response): Promise<Response> {
    try {
        const centerId = Number(req.body.centerId);
        const ngsTypeId = Number(req.body.ngsTypeId);
        const libraryPrepKitId = Number(req.body.libraryPrepKitId);
        const platformId = Number(req.body.platformId);
        const softwareId = Number(req.body.softwareId);

        if (!centerId || !ngsTypeId || !libraryPrepKitId || !platformId || !softwareId) return res.status(400).json("Missing data");

        const result = await batchService.createPreprocess(centerId, ngsTypeId, libraryPrepKitId, platformId, softwareId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating preprocess");
    }
}

/**
 * Preprocess controller call the service to update the preprocess
 * 
 * Gets from the request
 *          @preprocessId from the req.params
 *          @centerId
 *          @ngsTypeId
 *          @libraryPrepKitId
 *          @platformId
 *          @softwareId
 * 
 * If everthing goes well
 *      - return status 200 with the updated preprocess
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePreprocess (req: Request, res: Response): Promise<Response> {
    try {
        const preprocessId = Number(req.params.id);
        const centerId = Number(req.body.centerId);
        const ngsTypeId = Number(req.body.ngsTypeId);
        const libraryPrepKitId = Number(req.body.libraryPrepKitId);
        const platformId = Number(req.body.platformId);
        const softwareId = Number(req.body.softwareId);

        if (!preprocessId || !centerId || !ngsTypeId || !libraryPrepKitId || !platformId || !softwareId) return res.status(400).json("Missing data");

        const result = await batchService.updatePreprocess(preprocessId, centerId, ngsTypeId, libraryPrepKitId, platformId, softwareId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating preprocess");
    }
}

/**
 * Preprocess controller call the service to deleted the preprocess
 * 
 * Gets from the request
 *          @preprocessId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted preprocess
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePreprocess (req: Request, res: Response): Promise<Response> {
    try {
        const preprocessId = Number(req.params.id);

        const result = await batchService.deletePreprocess(preprocessId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting preprocess");
    }
}

//------------------------
//-        Center        -
//------------------------

/**
 * Center controller call the service to get the center
 * 
 * Gets from the request
 *          @centerId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the center
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getCenter (req: Request, res: Response): Promise<Response> {
    try {
        const centerId = Number(req.params.id);

        if (!centerId) return res.status(400).json("Missing data");

        const result = await batchService.getCenter(centerId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting center by id");
    }
}

/**
 * Center controller call the service to get all centers
 * 
 * If everthing goes well
 *      - return status 200 with the all centers
 * On error
 *      - return status 500 and Error message
 */
export async function getAllCenters (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllCenters();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all centers");
    }
}

/**
 * Center controller call the service to create the center
 * 
 * Gets from the request
 *          @centerId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the created center
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createCenter (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await batchService.createCenter(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating center");
    }
}

/**
 * Center controller call the service to update the center
 * 
 * Gets from the request
 *          @centerId from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated center
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateCenter (req: Request, res: Response): Promise<Response> {
    try {
        const centerId = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await batchService.updateCenter(centerId, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating center");
    }
}

/**
 * Center controller call the service to delete the center
 * 
 * Gets from the request
 *          @centerId from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the deleted center
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteCenter (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await batchService.deleteCenter(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting center");
    }
}

//------------------------
//-   Library prep kit   -
//------------------------

/**
 * Library Prep Kit controller call the service to get the data
 * 
 * Gets from the request
 *          @libraryPrepKitId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getLibraryPrepKit (req: Request, res: Response): Promise<Response> {
    try {
        const libraryPrepKitId = Number(req.params.id);

        if (!libraryPrepKitId) return res.status(400).json("Missing data");

        const result = await batchService.getLibraryPrepKit(libraryPrepKitId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting library prepare kit by id");
    }
}

/**
 * Library Prep Kit controller call the service to get all the data
 * 
 * If everthing goes well
 *      - return status 200 with all the data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllLibraryPrepKits (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllLibraryPrepKits();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all library prepare kits");
    }
}

/**
 * Library Prep Kit controller call the service to create the data
 * 
 * Gets from the request.body
 *          @name
 *          @chemVer
 *          @insertSize
 * 
 * If everthing goes well
 *      - return status 200 with the created Library Prep Kit
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createLibraryPrepKit (req: Request, res: Response): Promise<Response> {
    try {
        const { name, chemVer } = req.body;
        const insertSize = Number(req.body.insertSize);

        if (!name) return res.status(400).json("Missing data");

        const result = await batchService.createLibraryPrepKit(name, chemVer, insertSize);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating library prepare kit");
    }
}

/**
 * Library Prep Kit controller call the service to update the data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 *          @chemVer
 *          @insertSize
 * 
 * If everthing goes well
 *      - return status 200 with the updated Library Prep Kit
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateLibraryPrepKit (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const { name, chemVer } = req.body;
        const insertSize = Number(req.body.insertSize);

        if (!name) return res.status(400).json("Missing data");

        const result = await batchService.updateLibraryPrepKit(id, name, chemVer, insertSize);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating library prepare kit");
    }
}

/**
 * Library Prep Kit controller call the service to delete
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Library Prep Kit
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteLibraryPrepKit (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await batchService.deleteLibraryPrepKit(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting library prepare kit");
    }
}

//------------------------
//-       Platform       -
//------------------------

/**
 * Platform controller call the service to get the Platform data
 * 
 * Gets from the request
 *          @platformId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Platform
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPlatform (req: Request, res: Response): Promise<Response> {
    try {
        const platformId = Number(req.params.id);

        if (!platformId) return res.status(400).json("Missing data");

        const result = await batchService.getPlatform(platformId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting platform by id");
    }
}

/**
 * Platform controller call the service to get all the Platform data
 * 
 * If everthing goes well
 *      - return status 200 with all the Platform
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPlatforms (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllPlatforms();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all platforms");
    }
}

/**
 * Platform controller call the service to create the Platform
 * 
 * Gets from the request
 *          @platformName from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the created Platform
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPlatform (req: Request, res: Response): Promise<Response> {
    try {
        const platformName = String(req.body.name);

        if (!platformName) return res.status(400).json("Missing data");

        const result = await batchService.createPlatform(platformName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating platform");
    }
}

/**
 * Platform controller call the service to update the Platform
 * 
 * Gets from the request
 *          @id from the req.params
 *          @platformName
 * 
 * If everthing goes well
 *      - return status 200 with the updated Platform
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePlatform (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const platformName = String(req.body.name);

        if (!platformName) return res.status(400).json("Missing data");

        const result = await batchService.updatePlatform(id, platformName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating platform");
    }
}

/**
 * Platform controller call the service to delete the Platform
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Platform
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePlatform (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await batchService.deletePlatform(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting platform");
    }
}

//------------------------
//-       Software       -
//------------------------

/**
 * Software controller call the service to get the Software data
 * 
 * Gets from the request
 *          @softwareId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Platform
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getSoftware (req: Request, res: Response): Promise<Response> {
    try {
        const softwareId = Number(req.params.id);

        if (!softwareId) return res.status(400).json("Missing data");

        const result = await batchService.getSoftware(softwareId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting software by id");
    }
}

/**
 * Software controller call the service to get all Software data
 * 
 * If everthing goes well
 *      - return status 200 with all Softwares
 * On error
 *      - return status 500 and Error message
 */
export async function getAllSoftwares (req: Request, res: Response): Promise<Response> {
    try {
        const result = await batchService.getAllSoftwares();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all softwares");
    }
}

/**
 * Software controller call the service to create Software
 * 
 * Gets from the request
 *          @softwareName
 * 
 * If everthing goes well
 *      - return status 200 with the created Software
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createSoftware (req: Request, res: Response): Promise<Response> {
    try {
        const softwareName = String(req.body.name);

        if (!softwareName) return res.status(400).json("Missing data");

        const result = await batchService.createSoftware(softwareName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating software");
    }
}

/**
 * Software controller call the service to update Software
 * 
 * Gets from the request
 *          @softwareId from the req.params
 *          @softwareName
 * 
 * If everthing goes well
 *      - return status 200 with the updated Software
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateSoftware (req: Request, res: Response): Promise<Response> {
    try {
        const softwareId = Number(req.params.id);
        const softwareName = String(req.body.name);

        if (!softwareName) return res.status(400).json("Missing data");

        const result = await batchService.updateSoftware(softwareId, softwareName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating software");
    }
}

/**
 * Software controller call the service to delete Software
 * 
 * Gets from the request
 *          @softwareId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the delted Software
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteSoftware (req: Request, res: Response): Promise<Response> {
    try {
        const softwareId = Number(req.params.id);

        const result = await batchService.deleteSoftware(softwareId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting software");
    }
}
