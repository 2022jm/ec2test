import { PrismaClient } from "@prisma/client";
import {
    Ngs,
    NgsType,
    Spike,
    GenomeReference
} from "@prisma/client";
const prisma = new PrismaClient();

const ngsRepository = prisma.ngs;
const ngsTypeRepository = prisma.ngsType;
const spikeRepository = prisma.spike;
const genomeReferenceRepository = prisma.genomeReference;

//########################
//#         NGS          #
//########################

//------------------------
//-         NGS          -
//------------------------

/**
 * Get Ngs with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Ngs>} ngs data
 * @returns {Promise<null>} ngs data
 */
export async function getNgs(id: number): Promise<Ngs | null> {
    try {
        return await ngsRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service getNgs");
        console.error(err);
        throw "Error ngs service getNgs";
    }
}

/**
 * Get all Ngs data
 * 
 * @returns {Promise<Ngs[]>} all Ngs data
 */
export async function getAllNgs(): Promise<Ngs[]> {
    try {
        return await ngsRepository.findMany();
    } catch (err) {
        console.error("Error ngs service getAllNgs");
        console.error(err);
        throw "Error ngs service getAllNgs";
    }
}

/**
 * Create Ngs with provided data
 * 
 * @param  {string} observedMeanDepth
 * @param  {number} ngsTypeId
 * @param  {number} biosampleId
 * @param  {number} batchId
 * @returns {Promise<Ngs>} Ngs created
 */
export async function createNgs(observedMeanDepth: string, ngsTypeId: number, biosampleId: number, batchId: number): Promise<Ngs> {
    try {
        return await ngsRepository.create({
            data: {
                observedMeanDepth: observedMeanDepth,
                ngsTypeId: ngsTypeId,
                biosampleId: biosampleId,
                batchId: batchId,
            },
        });
    } catch (err) {
        console.error("Error ngs service createNgs");
        console.error(err);
        throw "Error ngs service createNgs";
    }
}

/**
 * Update Ngs with provided id and data
 * 
 * @param  {number} id
 * @param  {string} observedMeanDepth
 * @param  {number} ngsTypeId
 * @param  {number} biosampleId
 * @param  {number} batchId
 * @returns {Promise<Ngs>} updated Ngs
 */
export async function updateNgs(id: number, observedMeanDepth: string, ngsTypeId: number, biosampleId: number, batchId: number): Promise<Ngs> {
    try {
        return await ngsRepository.update({
            where: {
                id: id,
            },
            data: {
                observedMeanDepth: observedMeanDepth,
                ngsTypeId: ngsTypeId,
                biosampleId: biosampleId,
                batchId: batchId,
            },
        });
    } catch (err) {
        console.error("Error ngs service updateNgs");
        console.error(err);
        throw "Error ngs service updateNgs";
    }
}

/**
 * Delete Ngs
 * 
 * @param  {number} id
 * @returns {Promise<Ngs>} deleted Ngs
 */
export async function deleteNgs(id: number): Promise<Ngs> {
    try {
        return await ngsRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service deleteNgs");
        console.error(err);
        throw "Error ngs service deleteNgs";
    }
}

//------------------------
//-       NGS type       -
//------------------------

/**
 * Get NgsType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<NgsType>} NgsType data
 * @returns {Promise<null>} not found
 */
export async function getNgsType(id: number): Promise<NgsType | null> {
    try {
        return await ngsTypeRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service getNgsType");
        console.error(err);
        throw "Error ngs service getNgsType";
    }
}

/**
 * Get all NgsTypes
 * 
 * @returns {Promise<NgsType[]} all NgsType data
 */
export async function getAllNgsTypes(): Promise<NgsType[]> {
    try {
        return await ngsTypeRepository.findMany();
    } catch (err) {
        console.error("Error ngs service getAllNgsType");
        console.error(err);
        throw "Error ngs service getAllNgsType";
    }
}

/**
 * Create NgsType with provided data
 * 
 * @param  {string} name
 * @returns {Promise<NgsType>}
 */
export async function createNgsType(name: string): Promise<NgsType> {
    try {
        return await ngsTypeRepository.create({
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error ngs service createNgsType");
        console.error(err);
        throw "Error ngs service createNgsType";
    }
}

/**
 * Update NgsType with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<NgsType>}updated NgsType
 */
export async function updateNgsType(id: number, name: string): Promise<NgsType> {
    try {
        return await ngsTypeRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error ngs service updateNgsType");
        console.error(err);
        throw "Error ngs service updateNgsType";
    }
}

/**
 * Delete NgsType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<NgsType>} deleted NgsType
 */
export async function deleteNgsType(id: number): Promise<NgsType> {
    try {
        return await ngsTypeRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service deleteNgsType");
        console.error(err);
        throw "Error ngs service deleteNgsType";
    }
}

//------------------------
//-        Spike         -
//------------------------

/**
 * Get Spike with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Spike>} Spike data
 * @returns {Promise<null>} not found
 */
export async function getSpike(id: number): Promise<Spike | null> {
    try {
        return await spikeRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service getSpike");
        console.error(err);
        throw "Error ngs service getSpike";
    }
}

/**
 * Get all Spikes
 * 
 * @returns {Promise<Spike[]>}
 */
export async function getAllSpikes(): Promise<any[]> {
    try {
        return await spikeRepository.findMany({
            select: {
                spikeDilution: true,
                spikeMix: true,
                ngs: {
                    select: {
                        observedMeanDepth: true,
                        biosample: {
                            select: {
                                biosampleId: true,
                            }
                        },
                        batch: {
                            select: {
                                batchId: true,
                            }
                        },
                    }
                },
            }
        });
    } catch (err) {
        console.error("Error ngs service getAllSpike");
        console.error(err);
        throw "Error ngs service getAllSpike";
    }
}

/**
 * Create Spike with provided data
 * 
 * @param  {number} ngsId
 * @param  {string} spikeDilution
 * @param  {string} spikeMix
 * @returns {Promise<Spike>} Spike created
 */
export async function createSpike(ngsId: number, spikeDilution: string, spikeMix: string): Promise<Spike> {
    try {
        return await spikeRepository.create({
            data: {
                ngsId: ngsId,
                spikeDilution: spikeDilution,
                spikeMix: spikeMix,
            },
        });
    } catch (err) {
        console.error("Error ngs service createSpike");
        console.error(err);
        throw "Error ngs service createSpike";
    }
}

/**
 * Update Spike with provided id and data
 * 
 * @param  {number} id
 * @param  {number} ngsId
 * @param  {string} spikeDilution
 * @param  {string} spikeMix
 * @returns {Promise<Spike>} updated Spike
 */
export async function updateSpike(id: number, ngsId: number, spikeDilution: string, spikeMix: string): Promise<Spike> {
    try {
        return await spikeRepository.update({
            where: {
                id: id,
            },
            data: {
                ngsId: ngsId,
                spikeDilution: spikeDilution,
                spikeMix: spikeMix,
            },
        });
    } catch (err) {
        console.error("Error ngs service updateSpike");
        console.error(err);
        throw "Error ngs service updateSpike";
    }
}

/**
 * Delete Spike with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Spike>} deleted Spike
 */
export async function deleteSpike(id: number): Promise<Spike> {
    try {
        return await spikeRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service deleteSpike");
        console.error(err);
        throw "Error ngs service deleteSpike";
    }
}

//------------------------
//-   Genome reference   -
//------------------------

/**
 * Get GenomeReference with provided id 
 * 
 * @param  {number} id 
 * @returns {Promise<GenomeReference>} GenomeReference data
 */
export async function getGenomeReference(id: number): Promise<GenomeReference | null> {
    try {
        return await genomeReferenceRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service getGenomeReference");
        console.error(err);
        throw "Error ngs service getGenomeReference";
    }
}

/**
 * Get all GenomeReference data
 * 
 * @returns {Promise<GenomeReference[]>} all GenomeReferece data
 */
export async function getAllGenomeReferences(): Promise<any[]> {
    try {
        return await genomeReferenceRepository.findMany({
            select: {
                id: true,
                genomeReference: true,
                ngs: {
                    select: {
                        observedMeanDepth: true,
                        biosample: {
                            select: {
                                biosampleId: true,
                            }
                        },
                        batch: {
                            select: {
                                batchId: true,
                            }
                        }
                    }
                }
            }
        });
    } catch (err) {
        console.error("Error ngs service getAllGenomeReference");
        console.error(err);
        throw "Error ngs service getAllGenomeReference";
    }
}

/**
 * Create GenomeReferece with provided data
 * 
 * @param  {number} ngsId
 * @param  {string} genomeReference
 * @returns {Promise<GenomeReference>} GenomeReference created
 */
export async function createGenomeReference(ngsId: number, genomeReference: string): Promise<GenomeReference> {
    try {
        return await genomeReferenceRepository.create({
            data: {
                ngsId: ngsId,
                genomeReference: genomeReference,
            },
        });
    } catch (err) {
        console.error("Error ngs service createGenomeReference");
        console.error(err);
        throw "Error ngs service createGenomeReference";
    }
}

/**
 * Update GenomeReference with provided id and data
 * 
 * @param  {number} id
 * @param  {number} ngsId
 * @param  {string} genomeReference
 * @returns {Promise<GenomeReference>} updated GenomeReference
 */
export async function updateGenomeReference(id: number, ngsId: number, genomeReference: string): Promise<GenomeReference> {
    try {
        return await genomeReferenceRepository.update({
            where: {
                id: id,
            },
            data: {
                ngsId: ngsId,
                genomeReference: genomeReference,
            },
        });
    } catch (err) {
        console.error("Error ngs service updateGenomeReference");
        console.error(err);
        throw "Error ngs service updateGenomeReference";
    }
}

/**
 * Delete GenomeReference with provided id
 * 
 * @param  {number} id
 * @returns {Promise<GenomeReference>} deleted GenomeReference
 */
export async function deleteGenomeReference(id: number): Promise<GenomeReference> {
    try {
        return await genomeReferenceRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error ngs service deleteGenomeReference");
        console.error(err);
        throw "Error ngs service deleteGenomeReference";
    }
}
