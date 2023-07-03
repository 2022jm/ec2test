import { Request, Response } from "express";

import * as phenotypeService from "../services/phenotype.service";

//########################
//#     Relationship     #
//########################

//------------------------
//-      Participant     -
//-       phenotype      -
//-     relationship     -
//------------------------

/**
 * Participant Phenotype Relationship controller call the service to get the Participant Phenotype Relationship data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Participant Phenotype Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getParticipantPhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getParticipantPhenotypeRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting participant phenotype relationship by id");
    }
}

/**
 * Participant Phenotype Relationship controller call the service to get all Participant Phenotype Relationship data
 * 
 * If everthing goes well
 *      - return status 200 with all Participant Phenotype Relationship data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllParticipantPhenotypeRelationships (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllParticipantPhenotypeRelationships();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all participant phenotype relationship");
    }
}

/**
 * Participant Phenotype Relationship controller call the service to create the Participant Phenotype Relationship data
 * 
 * Gets from the request
 *          @participantId
 *          @phenotypeId
 *          @phenotypeSourceId
 *          @probability
 *          @observedId
 * 
 * If everthing goes well
 *      - return status 200 with the created Participant Phenotype Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createParticipantPhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const participantId = Number(req.body.participantId);
        const phenotypeId = Number(req.body.phenotypeId);
        const phenotypeSourceId = Number(req.body.phenotypeSourceId);
        const probability = Number(req.body.probability);
        const observedId = Number(req.body.observedId);

        if (!participantId || !phenotypeId || !phenotypeSourceId || !probability || !observedId) return res.status(400).json("Missing data");

        const result = await phenotypeService.createParticipantPhenotypeRelationship(participantId, phenotypeId, phenotypeSourceId, probability, observedId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating participant phenotype relationship");
    }
}

/**
 * Participant Phenotype Relationship controller call the service to update the Participant Phenotype Relationship data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @participantId
 *          @phenotypeId
 *          @phenotypeSourceId
 *          @probability
 *          @observedId
 * 
 * If everthing goes well
 *      - return status 200 with the updated Participant Phenotype Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateParticipantPhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const participantId = Number(req.body.participantId);
        const phenotypeId = Number(req.body.phenotypeId);
        const phenotypeSourceId = Number(req.body.phenotypeSourceId);
        const probability = req.body.probability;
        const observedId = Number(req.body.observedId);

        if (!participantId || !phenotypeId || !phenotypeSourceId || !probability || !observedId) return res.status(400).json("Missing data");

        const result = await phenotypeService.updateParticipantPhenotypeRelationship(id, participantId, phenotypeId, phenotypeSourceId, probability, observedId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating participant phenotype relationship");
    }
}

/**
 * Participant Phenotype Relationship controller call the service to delete the Participant Phenotype Relationship data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Participant Phenotype Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteParticipantPhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deleteParticipantPhenotypeRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting participant phenotype relationship");
    }
}

//------------------------
//-       Observed       -
//------------------------

/**
 * Observed controller call the service to get the Observed data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Observed data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getObserved (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getObserved(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting observed by id");
    }
}

/**
 * Observed controller call the service to get all Observed data
 * 
 * If everthing goes well
 *      - return status 200 with all Observed data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getAllObserved (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllObserved();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all observed");
    }
}

/**
 * Observed controller call the service to create the Observed
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Observed data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createObserved (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.createObserved(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating observed");
    }
}

/**
 * Observed controller call the service to update the Observed
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Observed data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateObserved (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.updateObserved(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating observed");
    }
}


export async function deleteObserved (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deleteObserved(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting observed");
    }
}

//------------------------
//-     Source type      -
//------------------------

/**
 * Source type controller call the service to get the Source type
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Source type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getSourceType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getSourceType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting source type by id");
    }
}

/**
 * Source type controller call the service to get all Source type
 * 
 * If everthing goes well
 *      - return status 200 with all Source type data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllSourceTypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllSourceTypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all source type");
    }
}

/**
 * Source type controller call the service to create the Source type
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Source type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createSourceType (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.createSourceType(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating source type");
    }
}

/**
 * Source type controller call the service to update the Source type
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Source type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateSourceType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.updateSourceType(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating source type");
    }
}

/**
 * Source type controller call the service to delete the Source type
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Source type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteSourceType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deleteSourceType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting source type");
    }
}

//------------------------
//-       Phenotype      -
//-        source        -
//------------------------

/**
 * Phenotype source controller call the service to get the Phenotype source
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Phenotype source data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPhenotypeSource (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getPhenotypeSource(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting phenotype source by id");
    }
}
/**
 * Phenotype source controller call the service to get all Phenotype source
 * 
 * If everthing goes well
 *      - return status 200 with all Phenotype source data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPhenotypeSources (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllPhenotypeSources();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all phenotype sources");
    }
}

/**
 * Phenotype source controller call the service to create the Phenotype source
 * 
 * Gets from the request
 *          @name
 *          @sourceTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the created Phenotype source data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPhenotypeSource (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);
        const sourceTypeId = Number(req.body.sourceTypeId);

        if (!name || !sourceTypeId) return res.status(400).json("Missing data");

        const result = await phenotypeService.createPhenotypeSource(name, sourceTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating phenotype source");
    }
}

/**
 * Phenotype source controller call the service to update the Phenotype source
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 *          @sourceTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the updated Phenotype source data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePhenotypeSource (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);
        const sourceTypeId = Number(req.body.sourceTypeId);


        const result = await phenotypeService.updatePhenotypeSource(id, name, sourceTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating phenotype source");
    }
}

/**
 * Phenotype source controller call the service to delete the Phenotype source
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype source data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePhenotypeSource (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deletePhenotypeSource(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting phenotype source");
    }
}

//########################
//#      Ontology       #
//########################

//------------------------
//-       Ontology      -
//-     relationship     -
//------------------------

/**
 * Ontology relationship controller call the service to get the Ontology relationship
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Ontology relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getOntologyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getOntologyRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting ontology relationship");
    }
}
/**
 * Ontology relationship controller call the service to get all Ontology relationship
 * 
 * If everthing goes well
 *      - return status 200 with the Ontology relationship data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllOntologyRelationships (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllOntologyRelationships();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all ontology relationship");
    }
}

/**
 * Ontology relationship controller call the service to create the Ontology relationship
 * 
 * Gets from the request
 *          @phenotypeId
 *          @phenotypeOntologyId
 * 
 * If everthing goes well
 *      - return status 200 with the created Ontology relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createOntologyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const phenotypeId = Number(req.body.phenotypeId);
        const phenotypeOntologyId = Number(req.body.phenotypeOntologyId);

        if (!phenotypeId || !phenotypeOntologyId) return res.status(400).json("Missing data");

        const result = await phenotypeService.createOntologyRelationship(phenotypeId, phenotypeOntologyId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating ontology relationship");
    }
}

/**
 * Ontology relationship controller call the service to udpate the Ontology relationship
 * 
 * Gets from the request
 *          @id from the req.params
 *          @phenotypeId
 *          @phenotypeOntologyId
 * 
 * If everthing goes well
 *      - return status 200 with the udpated Ontology relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateOntologyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const phenotypeId = Number(req.body.phenotypeId);
        const phenotypeOntologyId = Number(req.body.phenotypeOntologyId);

        if (!phenotypeId || !phenotypeOntologyId) return res.status(400).json("Missing data");

        const result = await phenotypeService.updateOntologyRelationship(id, phenotypeId, phenotypeOntologyId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating ontology relationship");
    }
}

/**
 * Ontology relationship controller call the service to delete the Ontology relationship
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Ontology relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteOntologyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deleteOntologyRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting ontology relationship");
    }
}

//------------------------
//-      Phenotype       -
//-      ontology       -
//------------------------

/**
 * Phenotype ontology controller call the service to get the Phenotype ontology
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype ontology data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPhenotypeOntology (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getPhenotypeOntology(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting phenotype ontology by id");
    }
}

/**
 * Phenotype ontology controller call the service to get all Phenotype ontology
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype ontology data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPhenotypeOntologies (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllPhenotypeOntologies();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all phenotype ontology");
    }
}

/**
 * Phenotype ontology controller call the service to create the Phenotype ontology
 * 
 * Gets from the request
 *          @name
 *          @ontologyTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the created Phenotype ontology data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPhenotypeOntology (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);
        const ontologyTypeId = Number(req.body.ontologyTypeId);

        if (!name || !ontologyTypeId) return res.status(400).json("Missing data");

        const result = await phenotypeService.createPhenotypeOntology(name, ontologyTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating phenotype ontology");
    }
}

/**
 * Phenotype ontology controller call the service to update the Phenotype ontology
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 *          @ontologyTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the updated Phenotype ontology data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePhenotypeOntology (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);
        const ontologyTypeId = Number(req.body.ontologyTypeId);

        if (!name || !ontologyTypeId) return res.status(400).json("Missing data");

        const result = await phenotypeService.updatePhenotypeOntology(id, name, ontologyTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating phenotype ontology");
    }
}

/**
 * Phenotype ontology controller call the service to delete the Phenotype ontology
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype ontology data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePhenotypeOntology (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deletePhenotypeOntology(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting phenotype ontology");
    }
}

//------------------------
//-    Ontology type    -
//------------------------

/**
 * Ontology type controller call the service to get the Ontology type
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Ontology type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getOntologyType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getOntologyType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting ontology type by id");
    }
}

/**
 * Ontology type controller call the service to get all Ontology type
 * 
 * If everthing goes well
 *      - return status 200 with all Ontology type data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllOntologyTypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllOntologyTypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all ontology types");
    }
}

/**
 * Ontology type controller call the service to create the Ontology type
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Ontology type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createOntologyType (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.createOntologyType(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating ontology type");
    }
}

/**
 * Ontology type controller call the service to update the Ontology type
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Ontology type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateOntologyType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.updateOntologyType(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating ontology type");
    }
}

/**
 * Ontology type controller call the service to delete the Ontology type
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Ontology type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteOntologyType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deleteOntologyType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting ontology type");
    }
}

//########################
//#      Phenotypes      #
//########################

//------------------------
//-      Phenotype       -
//------------------------

/**
 * Phenotype controller call the service to get the Phenotype
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Phenotype data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPhenotype (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getPhenotype(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting phenotype by id");
    }
}

/**
 * Phenotype controller call the service to get all Phenotype
 * 
 * If everthing goes well
 *      - return status 200 with all Phenotype data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPhenotypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllPhenotypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all phenotypes");
    }
}

/**
 * Phenotype controller call the service to create the Phenotype
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Phenotype data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPhenotype (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.createPhenotype(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating phenotype");
    }
}

/**
 * Phenotype controller call the service to update the Phenotype
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Phenotype data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePhenotype (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.updatePhenotype(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating phenotype");
    }
}

/**
 * Phenotype controller call the service to delete the Phenotype
 *
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePhenotype (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deletePhenotype(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting phenotype");
    }
}

/**
 * Phenotype controller call the service to get phenotype detail (all ontologies of the phenotype)
 *
 * Gets from the request
 *          @phenotypeId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype data
 * On error
 *      - return status 500 and Error message
 */
export async function getPhenotypeDetail (req: Request, res: Response): Promise<Response> {
    try {
        const phenotypeId = Number(req.params.id);

        const phenotypeDetail = await phenotypeService.getPhenotypeDetail(phenotypeId);
        return res.json(phenotypeDetail);
    } catch {
        return res.status(500).json("Error phenotype detail");
    }
}

//------------------------
//-       Phenotype      -
//-       phenotype      -
//-     relationship     -
//------------------------

/**
 * Phenotype phenotype relationship call the service to get the Phenotype phenotype relationship
 *
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Phenotype phenotype relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPhenotypePhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getPhenotypePhenotypeRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting phenotype phenotype relationship");
    }
}

/**
 * Phenotype phenotype relationship call the service to get all Phenotype phenotype relationship
 *
 * If everthing goes well
 *      - return status 200 with all Phenotype phenotype relationship data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPhenotypePhenotypeRelationships (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllPhenotypePhenotypeRelationships();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all phenotype phenotype relationship");
    }
}

/**
 * Phenotype phenotype relationship call the service to create the Phenotype phenotype relationship
 *
 * Gets from the request
 *          @phenotype1Id
 *          @phenotype2Id
 *          @phenotypeTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the created Phenotype phenotype relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPhenotypePhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const phenotype1Id = Number(req.body.phenotype1Id);
        const phenotype2Id = Number(req.body.phenotype2Id);
        const phenotypeTypeId = Number(req.body.phenotypeTypeId);

        if (!phenotype1Id || !phenotype2Id || !phenotypeTypeId) return res.status(400).json("Missing data");

        const result = await phenotypeService.createPhenotypePhenotypeRelationship(phenotype1Id, phenotype2Id, phenotypeTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating phenotype phenotype relationship");
    }
}

/**
 * Phenotype phenotype relationship call the service to update the Phenotype phenotype relationship
 *
 * Gets from the request
 *          @id from the req.params
 *          @phenotype1Id
 *          @phenotype2Id
 *          @phenotypeTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the updated Phenotype phenotype relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePhenotypePhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const phenotype1Id = Number(req.body.phenotype1Id);
        const phenotype2Id = Number(req.body.phenotype2Id);
        const phenotypeTypeId = Number(req.body.phenotypeTypeId);

        if (!phenotype1Id || !phenotype2Id || !phenotypeTypeId) return res.status(400).json("Missing data");

        const result = await phenotypeService.updatePhenotypePhenotypeRelationship(id, phenotype1Id, phenotype2Id, phenotypeTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating phenotype phenotype relationship");
    }
}

/**
 * Phenotype phenotype relationship call the service to delete the Phenotype phenotype relationship
 *
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Phenotype phenotype relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePhenotypePhenotypeRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deletePhenotypePhenotypeRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting phenotype phenotype relationship");
    }
}

//------------------------
//-    Phenotype type    -
//------------------------

/**
 * Phenotype type call the service to get the Phenotype type
 *
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Phenotype type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getPhenotypeType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.getPhenotypeType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting phenotype type by id");
    }
}

/**
 * Phenotype type call the service to get all Phenotype type
 *
 * If everthing goes well
 *      - return status 200 with all Phenotype type data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPhenotypeTypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await phenotypeService.getAllPhenotypeTypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all phenotype types");
    }
}

/**
 * Phenotype type call the service to create the Phenotype type
 *
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Phenotype type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createPhenotypeType (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.createPhenotypeType(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating phenotype type");
    }
}

/**
 * Phenotype type call the service to update the Phenotype type
 *
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Phenotype type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updatePhenotypeType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await phenotypeService.updatePhenotypeType(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating phenotype type");
    }
}

/**
 * Phenotype type call the service to delete the Phenotype type
 *
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 * 
 *      - return status 200 with the deleted Phenotype type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deletePhenotypeType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await phenotypeService.deletePhenotypeType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting phenotype type");
    }
}
