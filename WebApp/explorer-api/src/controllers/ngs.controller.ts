import { Request, Response } from "express";

import * as ngsService from "../services/ngs.service";

//########################
//#         NGS          #
//########################

//------------------------
//-         NGS          -
//------------------------

/**
 * NGS controller call the service to get the NGS data
 * 
 * Gets from the request
 *          @ngsId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the NGS data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getNgs (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.params.id);

        if (!ngsId) return res.status(400).json("Missing data");

        const result = await ngsService.getNgs(ngsId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting ngs by id");
    }
}

/**
 * NGS controller call the service to get all NGS data
 * 
 * If everthing goes well
 *      - return status 200 with all NGS data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllNgs (req: Request, res: Response): Promise<Response> {
    try {
        const result = await ngsService.getAllNgs();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all ngs");
    }
}

/**
 * NGS controller call the service to create the NGS data
 * 
 * Gets from the request
 *          @observedMeanDepth
 *          @ngsTypeId
 *          @biosampleId
 *          @batchId
 * 
 * If everthing goes well
 *      - return status 200 with the created NGS data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createNgs (req: Request, res: Response): Promise<Response> {
    try {
        const observedMeanDepth = String(req.body.observedMeanDepth);
        const ngsTypeId = Number(req.body.ngsTypeId);
        const biosampleId = Number(req.body.biosampleId);
        const batchId = Number(req.body.batchId);

        if (!observedMeanDepth || !ngsTypeId || !biosampleId || !batchId) return res.status(400).json("Missing data");

        const result = await ngsService.createNgs(observedMeanDepth, ngsTypeId, biosampleId, batchId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creting ngs");
    }
}

/**
 * NGS controller call the service to udpate the NGS data
 * 
 * Gets from the request
 *          @ngsId from the req.params
 *          @observedMeanDepth
 *          @ngsTypeId
 *          @biosampleId
 *          @batchId
 * 
 * If everthing goes well
 *      - return status 200 with the udpated NGS data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateNgs (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.params.id);
        const observedMeanDepth = String(req.body.observedMeanDepth);
        const ngsTypeId = Number(req.body.ngsTypeId);
        const biosampleId = Number(req.body.biosampleId);
        const batchId = Number(req.body.batchId);

        if (!ngsId || !observedMeanDepth || !ngsTypeId || !biosampleId || !batchId) return res.status(400).json("Missing data");

        const result = await ngsService.updateNgs(ngsId, observedMeanDepth, ngsTypeId, biosampleId, batchId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating ngs");
    }
}

/**
 * NGS controller call the service to delete the NGS data
 * 
 * Gets from the request
 *          @ngsId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted NGS data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteNgs (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.params.id);

        if (!ngsId) return res.status(400).json("Missing data");

        const result = await ngsService.deleteNgs(ngsId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting ngs");
    }
}

//------------------------
//-       NGS type       -
//------------------------

/**
 * NGS Type controller call the service to udpate the NGS Type data
 * 
 * Gets from the request
 *          @ngsId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the NGS Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getNgsType (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.params.id);

        if (!ngsId) return res.status(400).json("Missing data");

        const result = await ngsService.getNgsType(ngsId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting ngs type id");
    }
}

/**
 * NGS Type controller call the service to udpate all NGS Type data
 * 
 * If everthing goes well
 *      - return status 200 with all NGS Type data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllNgsTypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await ngsService.getAllNgsTypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all ngs type");
    }
}

/**
 * NGS Type controller call the service to create the NGS Type data
 * 
 * Gets from the request
 *          @ngsTypeName
 * 
 * If everthing goes well
 *      - return status 200 with the created NGS Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createNgsType (req: Request, res: Response): Promise<Response> {
    try {
        const ngsTypeName = String(req.body.name);

        if (!ngsTypeName) return res.status(400).json("Missing data");

        const result = await ngsService.createNgsType(ngsTypeName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating ngs type");
    }
}

/**
 * NGS Type controller call the service to update the NGS Type data
 * 
 * Gets from the request
 *          @ngsId from the req.params
 *          @ngsTypeName
 * 
 * If everthing goes well
 *      - return status 200 with the updated NGS Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateNgsType (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.params.id);
        const name = String(req.body.name);

        if (!ngsId || !name) return res.status(400).json("Missing data");

        const result = await ngsService.updateNgsType(ngsId, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating ngs type");
    }
}

/**
 * NGS Type controller call the service to delete the NGS Type data
 * 
 * Gets from the request
 *          @ngsId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted NGS Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteNgsType (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.params.id);

        if (!ngsId) return res.status(400).json("Missing data");

        const result = await ngsService.deleteNgsType(ngsId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting ngs type");
    }
}

//------------------------
//-        Spike         -
//------------------------

/**
 * Spike controller call the service to get the Spike data
 * 
 * Gets from the request
 *          @spikeId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Spike data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getSpike (req: Request, res: Response): Promise<Response> {
    try {
        const spikeId = Number(req.params.id);

        if (!spikeId) return res.status(400).json("Missing data");

        const result = await ngsService.getSpike(spikeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting spike by id");
    }
}

/**
 * Spike controller call the service to get all Spike data
 * 
 * If everthing goes well
 *      - return status 200 with all Spike data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getAllSpikes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await ngsService.getAllSpikes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all spikes");
    }
}

/**
 * Spike controller call the service to create the Spike data
 * 
 * Gets from the request
 *          @ngsId
 *          @spikeDilution
 *          @spikeMix
 * 
 * If everthing goes well
 *      - return status 200 with the created Spike data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createSpike (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.body.ngsId);
        const spikeDilution = String(req.body.spikeDilution);
        const spikeMix = String(req.body.spikeMix);

        if (!ngsId) return res.status(400).json("Missing data");

        const result = await ngsService.createSpike(ngsId, spikeDilution, spikeMix);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating spike");
    }
}

/**
 * Spike controller call the service to update the Spike
 * 
 * Gets from the request
 *          @spikeId from the req.params
 *          @ngsId
 *          @spikeDilution
 *          @spikeMix
 * 
 * If everthing goes well
 *      - return status 200 with the updated Spike data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateSpike (req: Request, res: Response): Promise<Response> {
    try {
        const spikeId = Number(req.params.id);
        const ngsId = Number(req.body.ngsId);
        const spikeDilution = String(req.body.spikeDilution);
        const spikeMix = String(req.body.spikeMix);

        if (!spikeId || !ngsId) return res.status(400).json("Missing data");

        const result = await ngsService.updateSpike(spikeId, ngsId, spikeDilution, spikeMix);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating spike");
    }
}

/**
 * Spike controller call the service to delete the Spike data
 * 
 * Gets from the request
 *          @spikeId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Spike data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteSpike (req: Request, res: Response): Promise<Response> {
    try {
        const spikeId = Number(req.params.id);

        if (!spikeId) return res.status(400).json("Missing data");

        const result = await ngsService.deleteSpike(spikeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting spike");
    }
}

//------------------------
//-   Genome reference   -
//------------------------

/**
 * Genome reference controller call the service to get the Genome reference data
 * 
 * Gets from the request
 *          @genomeReferenceId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Genome reference data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getGenomeReference (req: Request, res: Response): Promise<Response> {
    try {
        const genomeReferenceId = Number(req.params.id);

        if (!genomeReferenceId) return res.status(400).json("Missing data");

        const result = await ngsService.getGenomeReference(genomeReferenceId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting genome reference by id");
    }
}

/**
 * Genome reference controller call the service to get all Genome reference data
 * 
 * If everthing goes well
 *      - return status 200 with all Genome reference data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllGenomeReferences (req: Request, res: Response): Promise<Response> {
    try {
        const result = await ngsService.getAllGenomeReferences();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all genome referece");
    }
}

/**
 * Genome reference controller call the service to create the Genome reference data
 * 
 * Gets from the request
 *          @ngsId
 *          @genomeReference
 * 
 * If everthing goes well
 *      - return status 200 with the created Genome reference data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createGenomeReference (req: Request, res: Response): Promise<Response> {
    try {
        const ngsId = Number(req.body.ngsId);
        const genomeReference = String(req.body.genomeReference);

        if (!ngsId || !genomeReference) return res.status(400).json("Missing data");

        const result = await ngsService.createGenomeReference(ngsId, genomeReference);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating genome reference");
    }
}

/**
 * Genome reference controller call the service to update the Genome reference data
 * 
 * Gets from the request
 *          @genomeReferenceId from the req.params
 *          @ngsId
 *          @genomeReference
 * 
 * If everthing goes well
 *      - return status 200 with the updated Genome reference data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateGenomeReference (req: Request, res: Response): Promise<Response> {
    try {
        const genomeReferenceId = Number(req.params.id);
        const ngsId = Number(req.body.ngsId);
        const genomeReference = String(req.body.genomeReference);

        if (!genomeReferenceId || !ngsId || !genomeReferenceId) return res.status(400).json("Missing data");

        const result = await ngsService.updateGenomeReference(genomeReferenceId, ngsId, genomeReference);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating genome reference");
    }
}

/**
 * Genome reference controller call the service to delete the Genome reference data
 * 
 * Gets from the request
 *          @genomeReferenceId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Genome reference data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteGenomeReference (req: Request, res: Response): Promise<Response> {
    try {
        const genomeReferenceId = Number(req.params.id);

        if (!genomeReferenceId) return res.status(400).json("Missing data");

        const result = await ngsService.deleteGenomeReference(genomeReferenceId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting genome reference");
    }
}
