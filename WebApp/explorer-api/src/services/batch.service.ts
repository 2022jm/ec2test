import { PrismaClient } from "@prisma/client";
import {
    BioinformaticPipeline,
    Batch,
    Preprocess,
    Center,
    LibraryPrepKit,
    Platform,
    Software,
} from "@prisma/client";

const prisma = new PrismaClient();

const bioinformaticPipelineRepository = prisma.bioinformaticPipeline;
const batchRepository = prisma.batch;
const preprocessRepository = prisma.preprocess;
const centerRepository = prisma.center;
const libraryPrepKitRepository = prisma.libraryPrepKit;
const platformRepository = prisma.platform;
const softwareRepository = prisma.software;

//########################
//#        Batch         #
//########################

//------------------------
//-    Bioinformatic     -
//-       pipeline       -
//------------------------
/**
 * Get the bioinformaticPipeline information with the provided id
 * 
 * @param  {number} id
 * @returns {Promise<BioinformaticPipeline>} bioinformaticpipeline data
 * @returns {Promise<null>} not found
 */
export async function getBioinformaticPipeline(id: number): Promise<BioinformaticPipeline | null> {
    try {
        return await bioinformaticPipelineRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service getBioinformaticPipeline");
        console.error(err);
        throw "Error batch service getBioinformaticPipeline";
    }
}

/**
 * Get all data of biosinformaticPipeline table
 * 
 * @returns {Promise<BioinformaticPipeline[]>}
 */
export async function getAllBioinformaticPipelines(): Promise<BioinformaticPipeline[]> {
    try {
        return await bioinformaticPipelineRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllBioinformatiPipelines");
        console.error(err);
        throw "Error batch service getAllBioinformatiPipelines";
    }
}

/**
 * Create a new bioinformaticPipeline
 * 
 * @param  {string} newBioinformaticPipeline
 * @returns {Promise<BioinformaticPipeline>} BioinformaticPipeline data created
 */
export async function createBioinformaticPipeline(newBioinformaticPipeline: string): Promise<BioinformaticPipeline> {
    try {
        return await bioinformaticPipelineRepository.create({
            data: {
                name: newBioinformaticPipeline,
            },
        });
    } catch (err) {
        console.error("Error batch service createBioinformaticPipeline");
        console.error(err);
        throw "Error batch service createBioinformaticPipeline";
    }
}

/**
 * Updated the BioinformaticPipeline with the provided id
 * 
 * @param  {number} id
 * @param  {string} newBioinformaticPipeline
 * @returns {Promise<BioinformaticPipeline>} BioinformaticPipeline data updated
 */
export async function updateBioinformaticPipeline(id: number, newBioinformaticPipeline: string): Promise<BioinformaticPipeline> {
    try {
        return await bioinformaticPipelineRepository.update({
            where: {
                id: id,
            },
            data: {
                name: newBioinformaticPipeline,
            },
        });
    } catch (err) {
        console.error("Error batch service updateBioinformaticPipeline");
        console.error(err);
        throw "Error batch service updateBioinformaticPipeline";
    }
}

/**
 * Delete BioinformaticPipeline with the provided id
 * 
 * @param  {number} id
 * @returns {Promise<BioinformaticPipeline>} Bioinformatic data deleted
 */
export async function deleteBioinformaticPipeline(id: number): Promise<BioinformaticPipeline> {
    try {
        return await bioinformaticPipelineRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service deleteBioinformaticPipeline");
        console.error(err);
        throw "Error batch service deleteBioinformaticPipeline";
    }
}

//------------------------
//-        Batch         -
//------------------------

/**
 * Get batch data with the provided id
 * @param  {number} id
 * @returns {Promise<Batch>} Batch data
 * @returns {Promise<null>} not found
 */
export async function getBatch(id: number): Promise<Batch | null> {
    try {
        return await batchRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service getBatch");
        console.error(err);
        throw "Error batch service getBatch";
    }
}

/**
 * Get all batches information
 * 
 * @returns {Promise<Batch[]>} all batches data
 */
export async function getAllBatches(): Promise<Batch[]> {
    try {
        return await batchRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllBatches");
        console.error(err);
        throw "Error batch service getAllBatches";
    }
}

/**
 * Create a new batch with the provided data
 * 
 * @param  {string} newBatchId
 * @param  {Date} newDeliveryDate
 * @param  {number} newStudyId
 * @param  {number} newPreprocessId
 * @param  {number} newBioinformaticPipelineId
 * @returns {Promise<Batch>} batch created
 */
export async function createBatch(newBatchId: string, newDeliveryDate: Date, newStudyId: number, newPreprocessId: number, newBioinformaticPipelineId: number): Promise<Batch> {
    try {
        return await prisma.batch.create({
            data: {
                batchId: newBatchId,
                deliveryDate: newDeliveryDate,
                studyId: newStudyId,
                preprocessId: newPreprocessId,
                bioinformaticPipelineId: newBioinformaticPipelineId,
            },
        });
    } catch (err) {
        console.error("Error batch service createBatch");
        console.error(err);
        throw "Error batch service createBatch";
    }
}

/**
 * Update batch with the id and data provided
 *
 * @param  {number} newBatchId
 * @param  {string} newBatchId
 * @param  {Date} newDeliveryDate
 * @param  {number} newStudyId
 * @param  {number} newPreprocessId
 * @param  {number} newBioinformaticPipelineId
 * @returns {Promise<Batch>} updated batch data
 */
export async function updateBatch(newBatchIdDB: number, newBatchId: string, newDeliveryDate: Date, newStudyId: number, newPreprocessId: number, newBioinformaticPipelineId: number): Promise<Batch> {
    try {
        return await prisma.batch.update({
            where: {
                id: newBatchIdDB,
            },
            data: {
                batchId: newBatchId,
                deliveryDate: newDeliveryDate,
                studyId: newStudyId,
                preprocessId: newPreprocessId,
                bioinformaticPipelineId: newBioinformaticPipelineId,
            },
        });
    } catch (err) {
        console.error("Error batch service updateBatch");
        console.error(err);
        throw "Error batch service updateBatch";
    }
}

/**
 * Delete batch
 * 
 * @param  {number} batchId
 * @returns {Promise<Batch>} Deleted batch data
 */
export async function deleteBatch(batchId: number): Promise<Batch> {
    try {
        return await batchRepository.delete({
            where: {
                id: batchId,
            },
        });
    } catch (err) {
        console.error("Error batch service deleteBatch");
        console.error(err);
        throw "Error batch service deleteBatch";
    }
}

//########################
//#      Preprocess      #
//########################

//------------------------
//-      Preprocess      -
//------------------------

/**
 * Get Preprocess data with provided id
 * 
 * @param  {number} preprocessId
 * @returns {Promise<Preprocess>} Preprocess data
 * @returns {Promise<null>} not found
 */
export async function getPreprocess(preprocessId: number): Promise<Preprocess | null> {
    try {
        return await preprocessRepository.findUnique({
            where: {
                id: preprocessId,
            },
        });
    } catch (err) {
        console.error("Error batch service getPreprocess");
        console.error(err);
        throw "Error batch service getPreprocess";
    }
}

/**
 * Get all data of preprocess
 * 
 * @returns {Promise<Preprocess[]>} All preprocess data
 */
export async function getAllPreprocesses(): Promise<Preprocess[]> {
    try {
        return await preprocessRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllPreprocesses");
        console.error(err);
        throw "Error batch service getAllPreprocesses";
    }
}

/**
 * Create preprocess with the provided data
 * 
 * @param  {number} newCenterId
 * @param  {number} newNgsTypeId
 * @param  {number} newLibraryPrepKitId
 * @param  {number} newPlatformId
 * @param  {number} newSoftwareId
 * @returns {Promise<Preprocess>} preprocess created
 */
export async function createPreprocess(newCenterId: number, newNgsTypeId: number, newLibraryPrepKitId: number, newPlatformId: number, newSoftwareId: number): Promise<Preprocess> {
    try {
        return await preprocessRepository.create({
            data: {
                centerId: newCenterId,
                ngsTypeId: newNgsTypeId,
                libraryPrepKitId: newLibraryPrepKitId,
                platformId: newPlatformId,
                softwareId: newSoftwareId,
            },
        });
    } catch (err) {
        console.error("Error batch service createPreprocess");
        console.error(err);
        throw "Error batch service createPreprocess";
    }
}

/**
 * Update preprocess with provided id and data
 * 
 * @param  {number} preprocessId
 * @param  {number} newCenterId
 * @param  {number} newNgsTypeId
 * @param  {number} newLibraryPrepKitId
 * @param  {number} newPlatformId
 * @param  {number} newSoftwareId
 * @returns {Promise<Preprocess>} updated preprocess
 */
export async function updatePreprocess(preprocessId: number, newCenterId: number, newNgsTypeId: number, newLibraryPrepKitId: number, newPlatformId: number, newSoftwareId: number): Promise<Preprocess> {
    try {
        return await preprocessRepository.update({
            where: {
                id: preprocessId,
            },
            data: {
                centerId: newCenterId,
                ngsTypeId: newNgsTypeId,
                libraryPrepKitId: newLibraryPrepKitId,
                platformId: newPlatformId,
                softwareId: newSoftwareId,
            },
        });
    } catch (err) {
        console.error("Error batch service updatePreprocess");
        console.error(err);
        throw "Error batch service updatePreprocess";
    }
}

/**
 * Delete proprocess with the provided id
 * 
 * @param  {number} preprocessId
 * @returns {Promise<Preprocess>} deleted Preprocess
 */
export async function deletePreprocess(preprocessId: number): Promise<Preprocess> {
    try {
        return await preprocessRepository.delete({
            where: {
                id: preprocessId,
            },
        });
    } catch (err) {
        console.error("Error batch service deletePreprocess");
        console.error(err);
        throw "Error batch service deletePreprocess";
    }
}

//------------------------
//-        Center        -
//------------------------

/**
 * Get center with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Center>} Center data
 * @returns {Promise<null>} not found
 */
export async function getCenter(id: number): Promise<Center | null> {
    try {
        return await centerRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service getCenter");
        console.error(err);
        throw "Error batch service getCenter";
    }
}

/**
 * Get all centers data
 * 
 * @returns {Promise<Center[]>} all centers data
 */
export async function getAllCenters(): Promise<Center[]> {
    try {
        return await centerRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllCenter");
        console.error(err);
        throw "Error batch service getAllCenter";
    }
}

/**
 * Create center with provided data
 * 
 * @param  {string} newCenter
 * @returns {Promise<Center>} center created
 */
export async function createCenter(newCenter: string): Promise<Center> {
    try {
        return await centerRepository.create({
            data: {
                name: newCenter,
            },
        });
    } catch (err) {
        console.error("Error batch service createCenter");
        console.error(err);
        throw "Error batch service createCenter"
    }
}

/**
 * Update center with provided id and data
 * 
 * @param  {number} id
 * @param  {string} newCenter
 * @returns {Promise<center>} udpated Center
 */
export async function updateCenter(id: number, newCenter: string): Promise<Center> {
    try {
        return await centerRepository.update({
            where: {
                id: id,
            },
            data: {
                name: newCenter,
            },
        });
    } catch (err) {
        console.error("Error batch service updateCenter");
        console.error(err);
        throw "Error batch service updateCenter";
    }
}

/**
 * Delete center with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Center>} deteled Center
 */
export async function deleteCenter(id: number): Promise<Center> {
    try {
        return await centerRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service deleteCenter");
        console.error(err);
        throw "Error batch service deleteCenter";
    }
}

//------------------------
//-   Library prep kit   -
//------------------------

/**
 * Get library prep kit with provided id
 * 
 * @param  {number} id
 * @returns {Promise<LibraryPrepKit>} libraryPrepKit data
 * @returns {Promise<null>} not found
 */
export async function getLibraryPrepKit(id: number): Promise<LibraryPrepKit | null> {
    try {
        return await libraryPrepKitRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service getLibraryPrepKit");
        console.error(err);
        throw "Error batch service getLibraryPrepKit";
    }
}

/**
 * Get all LibraryPrepKits
 * 
 * @returns {Promise<LibraryPrepKit[]>}
 */
export async function getAllLibraryPrepKits(): Promise<LibraryPrepKit[]> {
    try {
        return await libraryPrepKitRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllLibraryPrepKits");
        console.error(err);
        throw "Error batch service getAllLibraryPrepKits";
    }
}

/**
 * Create LibraryPrepKit with provided data
 * 
 * @param  {string} newName
 * @param  {string} newChemVer
 * @param  {number} newInsertSize
 * @returns {Promise<LibraryPrepKit>} LibraryPrepKit created
 */
export async function createLibraryPrepKit(newName: string, newChemVer: string, newInsertSize: number): Promise<LibraryPrepKit> {
    try {
        return await libraryPrepKitRepository.create({
            data: {
                name: newName,
                chemVer: newChemVer,
                insertSize: newInsertSize,
            },
        });
    } catch (err) {
        console.error("Error batch service createLibraryPrepKit");
        console.error(err);
        throw "Error batch service createLibraryPrepKit";
    }
}

/**
 * Update LibraryPrepKit with provided id and data
 * 
 * @param  {number} id
 * @param  {string} newName
 * @param  {string} newChemVer
 * @param  {number} newInsertSize
 * @returns {Promise<LibraryPrepKit>} updated LibraryPrepKit 
 */
export async function updateLibraryPrepKit(id: number, newName: string, newChemVer: string, newInsertSize: number): Promise<LibraryPrepKit> {
    try {
        return await libraryPrepKitRepository.update({
            where: {
                id: id,
            },
            data: {
                name: newName,
                chemVer: newChemVer,
                insertSize: newInsertSize,
            },
        });
    } catch (err) {
        console.error("Error batch service updateLibraryPrepKit");
        console.error(err);
        throw "Error batch service updateLibraryPrepKit";
    }
}

/**
 * Delete LibraryPrepKit with provided id
 * 
 * @param  {number} id
 * @returns {Promise<LibraryPrepKit>} deleted LibraryPrepKit
 */
export async function deleteLibraryPrepKit(id: number): Promise<LibraryPrepKit> {
    try {
        return await libraryPrepKitRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service deleteLibraryPrepKit");
        console.error(err);
        throw "Error batch service deleteLibraryPrepKit";
    }
}

//------------------------
//-       Platform       -
//------------------------
/**
 * Get Platform with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Platform>} Platform data
 * @returns {Promise<null>} not found  
 */
export async function getPlatform(id: number): Promise<Platform | null> {
    try {
        return await platformRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service getPlatform");
        console.error(err);
        throw "Error batch service getPlatform";
    }
}

/**
 * Get all platform data
 * 
 * @returns {Promise<Platform[]>} all Platforms data 
 */
export async function getAllPlatforms(): Promise<Platform[]> {
    try {
        return await platformRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllPlatforms");
        console.error(err);
        throw "Error batch service getAllPlatforms";
    }
}

/**
 * Create platform with provided data
 * 
 * @param  {string} newName
 * @returns {Promise<Platform>} Platform created
 */
export async function createPlatform(newName: string): Promise<Platform> {
    try {
        return await platformRepository.create({
            data: {
                name: newName,
            },
        });
    } catch (err) {
        console.error("Error batch service createPlatform");
        console.error(err);
        throw "Error batch service createPlatform";
    }
}

/**
 * Update platform with provided id and data
 * 
 * @param  {number} id
 * @param  {string} newName
 * @returns {Promise<Platform>} updated Platform
 */
export async function updatePlatform(id: number, newName: string): Promise<Platform> {
    try {
        return await platformRepository.update({
            where: {
                id: id,
            },
            data: {
                name: newName,
            },
        });
    } catch (err) {
        console.error("Error batch service updatePlatform");
        console.error(err);
        throw "Error batch service updatePlatform";
    }
}

/**
 * Delete Platform with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Platform>} deleted Platform
 */
export async function deletePlatform(id: number): Promise<Platform>{
    try {
        return await platformRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service deletePlatform");
        console.error(err);
        throw "Error batch service deletePlatform";
    }
}

//------------------------
//-       Software       -
//------------------------

/**
 * Get Software with provided id
 *  
 * @param  {number} id
 * @returns {Promise<Software>} Software data
 * @returns {Promise<null>} not found
 */
export async function getSoftware(id: number): Promise<Software | null> {
    try {
        return await softwareRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service getSoftware");
        console.error(err);
        throw "Error batch service getSoftware";
    }
}

/**
 * Get all Softwares data
 * 
 * @returns {Promise<Software[]>} all Software data
 */
export async function getAllSoftwares(): Promise<Software[]> {
    try {
        return await softwareRepository.findMany();
    } catch (err) {
        console.error("Error batch service getAllSoftwares");
        console.error(err);
        throw "Error batch service getAllSoftwares";
    }
}

/**
 * Create Software with provided data
 * 
 * @param  {string} newName
 * @returns {Promise<Software>} Software created
 */
export async function createSoftware(newName: string): Promise<Software> {
    try {
        return await softwareRepository.create({
            data: {
                name: newName,
            },
        });
    } catch (err) {
        console.error("Error batch service createSoftware");
        console.error(err);
        throw "Error batch service createSoftware";
    }
}

/**
 * Update Software with provided id and data
 * 
 * @param  {number} id
 * @param  {string} newName
 * @returns {Promise<Software>} updated Software
 */
export async function updateSoftware(id: number, newName: string): Promise<Software> {
    try {
        return await softwareRepository.update({
            where: {
                id: id,
            },
            data: {
                name: newName,
            },
        });
    } catch (err) {
        console.error("Error batch service updateSoftware");
        console.error(err);
        throw "Error batch service updateSoftware";
    }
}

/**
 * Delete software with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Software>} deleted Software
 */
export async function deleteSoftware(id: number): Promise<Software> {
    try {
        return await softwareRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error batch service deleteSoftware");
        console.error(err);
        throw "Error batch service deleteSoftware";
    }
}
