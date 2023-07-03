import { Request, Response } from "express";

import * as participantService from "../services/participant.service";

//########################
//#      Participant     #
//########################

//------------------------
//-     Participant      -
//------------------------

export async function getParticipantTab (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getParticipantTab();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting participant tab information");
    }
} 

/**
 * Participant controller call the service to get the Participant data
 * 
 * Gets from the request
 *          @participantId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Participant data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getParticipant (req: Request, res: Response): Promise<Response> {
    try {
        const participantId = Number(req.params.id);

        const result = await participantService.getParticipant(participantId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting participant by id");
    }
}

/**
 * Participant controller call the service to get all Participant data
 * 
 * If everthing goes well
 *      - return status 200 with all Participant data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllParticipants (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllParticipants();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all participants");
    }
}

/**
 * Participant controller call the service to get the Participant data
 * 
 * Gets from the request
 *          @participantIdentification
 *          @genderId
 *          @raceId
 *          @dateOfBirth
 *          @categoryId
 * 
 * If everthing goes well
 *      - return status 200 with the created Participant data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createParticipant (req: Request, res: Response): Promise<Response> {
    try {
        const internalId = String(req.body.internalId);
        const externalId = String(req.body.externalId);
        const genderId = Number(req.body.genderId);
        const raceId = req.body.raceId;
        const dateOfBirth = new Date(req.body.dateOfBirth);
        const categoryId = Number(req.body.categoryId);

        if (!internalId || !externalId || !genderId || !dateOfBirth || !categoryId) return res.status(400).json("Missing data");

        const result = await participantService.createParticipant(internalId, externalId, genderId, raceId, dateOfBirth, categoryId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating participant");
    }
}

/**
 * Participant controller call the service to udpate the Participant data
 * 
 * Gets from the request
 *          @participantId from the req.params
 *          @participantIdentification
 *          @genderId
 *          @raceId
 *          @dateOfBirth
 *          @categoryId
 * 
 * If everthing goes well
 *      - return status 200 with the udpated Participant data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateParticipant (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const internalId = String(req.body.internalId);
        const externalId = String(req.body.externalId);
        const genderId = Number(req.body.genderId);
        const raceId = req.body.raceId;
        const dateOfBirth = new Date(req.body.yearOfBirth);
        const categoryId = Number(req.body.categoryId);

        if (!internalId || !externalId || !genderId || !dateOfBirth || !categoryId) return res.status(400).json("Missing data");

        const result = await participantService.updateParticipant(id, internalId, externalId, genderId, raceId, dateOfBirth, categoryId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating participant");
    }
}

/**
 * Participant controller call the service to delete the Participant data
 * 
 * Gets from the request
 *          @participantId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Participant data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteParticipant (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.deleteParticipant(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting participant");
    }
}

/**
 * Participant controller gets all phenotypes for each participant
 * 
 * If everthing goes well
 *      - return status 200 with all Phenotypes for each participant
 * On error
 *      - return status 500 and Error message
 */
export async function getAllPhenotypesByParticipants (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllPhenotypesByParticipants();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all phenotypes by participant");
    }
}

/**
 * Participant controller gets all phenotypes for each participant
 * 
 * If everthing goes well
 *      - return status 200 with all Phenotypes for each participant
 * On error
 *      - return status 500 and Error message
 */
export async function getParticipantsPhenotypesTable (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getParticipantPhenotypesTable();
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json("Error getting participant phenotype");
    }
}

/**
 * Participant controller gets all biosamples of a participant
 * 
 * Gets from the request
 *          @participantId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with all Biosamples of a participant
 * On error
 *      - return status 500 and Error message
 */
export async function getAllBiosamplesByParticipant (req: Request, res: Response): Promise<Response> {
    try {
        const participantId = Number(req.params.id);

        const result = await participantService.getAllBiosamplesByParticipant(participantId);
        return res.json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all biosamples by participant");
    }
}

//------------------------
//-        Gender        -
//------------------------

/**
 * Gender controller call the service to get the Gender data
 * 
 * Gets from the request
 *          @genderId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Gender data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getGender (req: Request, res: Response): Promise<Response> {
    try {
        const genderId = Number(req.params.id);

        const result = await participantService.getGender(genderId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting gender by id");
    }
}

/**
 * Gender controller call the service to get all Gender data
 * 
 * If everthing goes well
 *      - return status 200 with all Gender data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllGenders (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllGenders();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all gender");
    }
}

/**
 * Gender controller call the service to create the Gender data
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Gender data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createGender (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.createGender(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating gender");
    }
}

/**
 * Gender controller call the service to update the Gender data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Gender data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateGender (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.updateGender(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating gender");
    }
}

/**
 * Gender controller call the service to delete the Gender data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Gender data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteGender (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.deleteGender(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting gender");
    }
}

//------------------------
//-         Race         -
//------------------------

/**
 * Race controller call the service to get the Race data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Race data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getRace (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.getRace(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting race by id");
    }
}

/**
 * Gender controller call the service to all Genders data
 * 
 * If everthing goes well
 *      - return status 200 with all Genders data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllRaces (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllRaces();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all races");
    }
}

/**
 * Race controller call the service to create the Race data
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Race data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createRace (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.createRace(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating race");
    }
}

/**
 * Race controller call the service to update the Race data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Race data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateRace (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.updateRace(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating race");
    }
}

/**
 * Race controller call the service to delete the Race data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Race data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteRace (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.deleteRace(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting race");
    }
}

//------------------------
//-       Category       -
//------------------------

/**
 * Category controller call the service to get the Category data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Category data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getCategory (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.getCategory(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting category by id");
    }
}

/**
 * Category controller call the service to get all Category data
 * 
 * If everthing goes well
 *      - return status 200 with all Category data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllCategories (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllCategories();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all categories");
    }
}

/**
 * Category controller call the service to create the Category data
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Category data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createCategory (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.createCategory(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating category");
    }
}
/**
 * Category controller call the service to update the Category data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Category data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateCategory (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.updateCategory(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating category");
    }
}
/**
 * Category controller call the service to delete the Category data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Category data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteCategory (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.deleteCategory(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting category");
    }
}

//########################
//#        Family        #
//########################

//------------------------
//-        Family        -
//-     relationship     -
//------------------------

/**
 * Family Relationship controller call the service to get the Family Relationship data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Family Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getFamilyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.getFamilyRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting family relationship by id");
    }
}

/**
 * Family Relationship controller call the service to get all Family Relationship data
 * 
 * If everthing goes well
 *      - return status 200 with all Family Relationship data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllFamilyRelationships (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllFamilyRelationships();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all family relationships");
    }
}

/**
 * Family Relationship controller call the service to create the Family Relationship data
 * 
 * Gets from the request
 *          @participant1Id
 *          @participant2Id
 *          @familyRelationshipTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the created Family Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createFamilyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const participant1Id = Number(req.body.participant1Id);
        const participant2Id = Number(req.body.participant2Id);
        const familyRelationshipTypeId = Number(req.body.familyRelationshipTypeId);

        if (!participant1Id || !participant2Id || !familyRelationshipTypeId) return res.status(400).json("Missing data");

        const result = await participantService.createFamilyRelationship(participant1Id, participant2Id, familyRelationshipTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating family relationship");
    }
}

/**
 * Family Relationship controller call the service to update the Family Relationship data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @participant1Id
 *          @participant2Id
 *          @familyRelationshipTypeId
 * 
 * If everthing goes well
 *      - return status 200 with the updated Family Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateFamilyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const participant1Id = Number(req.body.participant1Id);
        const participant2Id = Number(req.body.participant2Id);
        const familyRelationshipTypeId = Number(req.body.familyRelationshipTypeId);

        if (!participant1Id || !participant2Id || !familyRelationshipTypeId) return res.status(400).json("Missing data");

        const result = await participantService.updateFamilyRelationship(id, participant1Id, participant2Id, familyRelationshipTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating family relationship");
    }
}

/**
 * Family Relationship controller call the service to delete the Family Relationship data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Family Relationship data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteFamilyRelationship (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.deleteFamilyRelationship(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting family relationship");
    }
}

//------------------------
//-  Relationship type   -
//------------------------

/**
 * Relationship Type controller call the service to get the Relationship Type data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Relationship Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getRelationshipType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.getRelationshipType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting relationship type by id");
    }
}

/**
 * Relationship Type controller call the service to get all Relationship Type data
 * 
 * If everthing goes well
 *      - return status 200 with the Relationship Type data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllRelationshipTypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await participantService.getAllRelationshipTypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all relationship type");
    }
}

/**
 * Relationship Type controller call the service to create the Relationship Type data
 * 
 * Gets from the request
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the created Relationship Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createRelationshipType (req: Request, res: Response): Promise<Response> {
    try {
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.createRelationshipType(name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating relationship type");
    }
}

/**
 * Relationship Type controller call the service to update the Relationship Type data
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 * 
 * If everthing goes well
 *      - return status 200 with the updated Relationship Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateRelationshipType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!name) return res.status(400).json("Missing data");

        const result = await participantService.updateRelationshipType(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating relationship type");
    }
}

/**
 * Relationship Type controller call the service to delete the Relationship Type data
 * 
 * Gets from the request
 *          @id from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted Relationship Type data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteRelationshipType (req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        const result = await participantService.deleteRelationshipType(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting relationship type");
    }
}
