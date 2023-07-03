import { Request, Response } from "express";

import * as biosampleService from "../services/biosample.service";

//########################
//#       Biosample      #
//########################

//------------------------
//-     Participant      -
//-      biosample       -
//------------------------

export async function getParticipantBiosampleTab (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getParticipantBiosampleTab();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting participant biosample tab");
    }
}

/**
 * Participant Biosample controller call the service to get the data
 * 
 * Gets from the request
 *          @participantBiosampleId from the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the data
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getParticipantBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const participantBiosampleId = Number(req.params.id);

        if (!participantBiosampleId) return res.status(400).json("Missing data");

        const result = await biosampleService.getParticipantBiosample(participantBiosampleId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting participant biosample by id");
    }
}

/**
 * Participant Biosample controller call the service to get all the data
 * 
 * If everthing goes well
 *      - return status 200 with the data
 * On error
 *      - return status 500 and Error message
 */
export async function getAllParticipantBiosamples (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllParticipantBiosamples();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all participant biosample");
    }
}

/**
 * Participant Biosample controller call the service to create the data
 * 
 * Gets from the request.body
 *          @participantId
 *          @biosampleId
 *          @dateOfSampling
 * 
 * If everthing goes well
 *      - return status 200 with the created ParticipantBiosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createParticipantBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const participantId = Number(req.body.participantId);
        const biosampleId = Number(req.body.biosampleId);
        const dateOfSampling = new Date(req.body.dateOfSampling);

        if (!participantId || !biosampleId) return res.status(400).json("Missing data");

        const result = await biosampleService.createParticipantBiosample(participantId, biosampleId, dateOfSampling);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating participant biosample");
    }
}

/**
 * Participant Biosample controller call the service to udpate the data
 * 
 * Gets from the request
 *          @participantBiosampleId form the req.params
 *          @participantId
 *          @biosampleId
 *          @dateOfSampling
 * 
 * If everthing goes well
 *      - return status 200 with the updated ParticipantBiosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateParticipantBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const participantBiosampleId = Number(req.params.id);
        const participantId = Number(req.body.participantId);
        const biosampleId = Number(req.body.biosampleId);
        const dateOfSampling = new Date(req.body.dateOfSampling);

        if (!participantBiosampleId || !participantId || !biosampleId) return res.status(400).json("Missing data");

        const result = await biosampleService.updateParticipantBiosample(participantBiosampleId, participantId, biosampleId, dateOfSampling);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating participant biosample");
    }
}

/**
 * Participant Biosample controller call the service to delete the data
 * 
 * Gets from the request
 *          @participantBiosampleId form the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the deleted ParticipantBiosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteParticipantBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const participantBiosampleId = Number(req.params.id);

        if (!participantBiosampleId) return res.status(400).json("Missing data");

        const result = await biosampleService.deleteParticipantBiosample(participantBiosampleId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting participant biosample");
    }
}

//------------------------
//-      Biosample       -
//------------------------

/**
 * Biosample controller call the service to get the data
 * 
 * Gets from the request
 *          @biosampleId form the req.params
 * 
 * If everthing goes well
 *      - return status 200 with the Biosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const biosampleId = Number(req.params.id);

        if (!biosampleId) return res.status(400).json("Missing data");

        const result = await biosampleService.getBiosample(biosampleId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting biosample by id");
    }
}

/**
 * Biosample controller call the service to get all the data
 * 
 * If everthing goes well
 *      - return status 200 with all Biosample
 * On error
 *      - return status 500 and Error message
 */
export async function getAllBiosamples (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllBiosamples();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all biosamples");
    }
}

/**
 * Biosample controller call the service to create the data
 * 
 * Gets from the request
 *          @biosampleId
 *          @biosourceId
 *          @location
 *          @tubeTypeId
 *          @statusId
 *          @biosampleId
 *          @studyId
 *          @drawTime
 *          @processingStartTime
 *          @freezingTime
 *          @processBy
 *          @notes
 * 
 * If everthing goes well
 *      - return status 200 with the created Biosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const biosampleId = String(req.body.biosampleId);
        const collaborator = String(req.body.collaborator);
        const biosourceId = Number(req.body.biosourceId);
        const location = String(req.body.location);
        const temperatureId = Number(req.body.temperatureId);
        const tubeTypeId = Number(req.body.tubeTypeId);
        const studyId = Number(req.body.studyId);
        const drawTime = String(req.body.drawTime);
        const processingStartTime = String(req.body.processingStartTime);
        const freezingTime = String(req.body.freezingTime);
        const processBy = String(req.body.processBy);
        const notes = String(req.body.notes);
        const statusId = Number(req.body.statusId);
        const statusDate = new Date(req.body.statusDate);

        console.log(collaborator);

        if (!biosampleId || !biosourceId || !location || !tubeTypeId || !statusId || !studyId) return res.status(400).json("Missing data");

        const result = await biosampleService.createBiosample(biosampleId, biosourceId, collaborator, location, temperatureId, tubeTypeId, studyId, drawTime, processingStartTime, freezingTime, processBy, notes, statusId, statusDate);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating biosample");
    }
}

/**
 * Biosample controller call the service to update the data
 * 
 * Gets from the request
 *          @participantInternalId from the req.params
 *          @biosampleId
 *          @biosourceId
 *          @location
 *          @tubeTypeId
 *          @studyId
 *          @drawTime
 *          @processingStartTime
 *          @freezingTime
 *          @processBy
 *          @notes
 *          @statusId
 *          @statusDate
 * 
 * If everthing goes well
 *      - return status 200 with the updated Biosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const participantInternalId = Number(req.params.id);
        const biosampleId = String(req.body.biosampleId);
        const biosourceId = Number(req.body.biosourceId);
        const location = String(req.body.location);
        const tubeTypeId = Number(req.body.tubeTypeId);
        const studyId = Number(req.body.studyId);
        const drawTime = String(req.body.drawTime);
        const processingStartTime = String(req.body.processingStartTime);
        const freezingTime = String(req.body.freezingTime);
        const processBy = String(req.body.processBy);
        const notes = String(req.body.notes);
        const statusId = Number(req.body.statusId);
        const statusDate = new Date(req.body.statusDate);

        if (!biosampleId || !biosampleId || !biosourceId || !location || !tubeTypeId || !statusId || !studyId) return res.status(400).json("Missing data");

        const result = await biosampleService.updateBiosample(participantInternalId, biosampleId, biosourceId, location, tubeTypeId, statusId, drawTime, processingStartTime, freezingTime, processBy, notes, studyId, statusDate);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating biosample");
    }
}

/**
 * Biosample controller call the service to delete the data
 * 
 * Gets from the request
 *          @biosampleId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the deleted Biosample
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteBiosample (req: Request, res: Response): Promise<Response> {
    try {
        const biosampleId = Number(req.params.id);

        if (!biosampleId) return res.status(400).json("Missing data");

        const result = await biosampleService.deleteBiosample(biosampleId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting biosample");
    }
}

//------------------------
//-      Temperature     -
//------------------------

/**
 * Temperature controller call the service to get the data
 * 
 * Gets from the request
 *          @temperatureId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the Temperature
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getTemperature (req: Request, res: Response): Promise<Response> {
    try {
        const temperatureId = Number(req.params.id);
        
        const result = await biosampleService.getTemperature(temperatureId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting temperature by id");
    }
}

/**
 * Temperature controller call the service to get all the data
 * 
 * If everthing goes well
 *      - return status 200 with all Temperatures
 * On error
 *      - return status 500 and Error message
 */
export async function getAllTemperatures (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllTemperatures();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all temperatures");
    }
}

/**
 * Temperature controller call the service to create the Temperature
 * 
 * Gets from the request
 *          @degrees
 *
 * If everthing goes well
 *      - return status 200 with the created Temperature
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createTemperature (req: Request, res: Response): Promise<Response> {
    try {
        const degrees = Number(req.body.number);
        
        const result = await biosampleService.createTemperature(degrees);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating temperature");
    }
}

/**
 * Temperature controller call the service to update the Temperature
 * 
 * Gets from the request
 *          @temperatureId from the req.params
 *          @degrees
 *
 * If everthing goes well
 *      - return status 200 with the updated Temperature
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateTemperature (req: Request, res: Response): Promise<Response> {
    try {
        const temperatureId = Number(req.params.id);
        const degrees = Number(req.body.number);
        
        const result = await biosampleService.updateTemperature(temperatureId, degrees);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating temperature");
    }
}

/**
 * Temperature controller call the service to delete the Temperature
 * 
 * Gets from the request
 *          @temperatureId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the deleted Temperature
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteTemperature (req: Request, res: Response): Promise<Response> {
    try {
        const temperatureId = Number(req.params.id);
        
        const result = await biosampleService.deleteTemperature(temperatureId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting temperature");
    }
}

//------------------------
//-      Biosource       -
//------------------------

/**
 * Biosource controller call the service to get the Biosource
 * 
 * Gets from the request
 *          @biosourceId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the Biosource
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getBiosource(req: Request, res: Response): Promise<Response> {
    try {
        const biosourceId = Number(req.params.id);

        const result = await biosampleService.getBiosource(biosourceId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting biosource by id");
    }
} 

/**
 * Biosource controller call the service to get all Biosources
 * 
 * If everthing goes well
 *      - return status 200 with all Biosources
 * On error
 *      - return status 500 and Error message
 */
export async function getAllBiosources(req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllBiosources();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all bisources");
    }
} 

/**
 * Biosource controller call the service to get the Biosource
 * 
 * Gets from the request
 *          @biosourceName from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the created Biosource
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createBiosource(req: Request, res: Response): Promise<Response> {
    try {
        const biosourceName = String(req.body.name);

        if (!biosourceName) return res.status(400).json("Missing data");

        const result = await biosampleService.createBiosource(biosourceName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating biosource");
    }
} 

/**
 * Biosource controller call the service to update the Biosource
 * 
 * Gets from the request
 *          @id from the req.params
 *          @name
 *
 * If everthing goes well
 *      - return status 200 with the updated Biosource
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateBiosource(req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const name = String(req.body.name);

        if (!id || !name) return res.status(400).json("Missing data");
        
        const result = await biosampleService.updateBiosource(id, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating biosource");
    }
} 

/**
 * Biosource controller call the service to delete the Biosource
 * 
 * Gets from the request
 *          @id from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the deleted Biosource
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteBiosource(req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);

        if (!id) return res.status(400).json("Missing data");

        const result = await biosampleService.deleteBiosource(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting biosource");
    }
}

//------------------------
//-      Tube type       -
//------------------------

/**
 * Tube Type controller call the service to get the Tube Type
 * 
 * Gets from the request
 *          @tubeTypeId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the Tube Type
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getTubeType (req: Request, res: Response): Promise<Response> {
    try {
        const tubeTypeId = Number(req.params.id);

        if (!tubeTypeId) return res.status(400).json("Missing data");

        const result = await biosampleService.getTubeType(tubeTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting tube type by id");
    }
}

/**
 * Tube Type controller call the service to get all Tube Types
 * 
 * If everthing goes well
 *      - return status 200 with all Tube Types
 * On error
 *      - return status 500 and Error message
 */
export async function getAllTubeTypes (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllTubeTypes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all tube types");
    }
}

/**
 * Tube Type controller call the service to create the Tube Type
 * 
 * Gets from the request
 *          @tubeTypeName
 *
 * If everthing goes well
 *      - return status 200 with the created Tube Type
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createTubeType (req: Request, res: Response): Promise<Response> {
    try {
        const tubeTypeName = String(req.body.name);

        if (!tubeTypeName) return res.status(400).json("Missing data");

        const result = await biosampleService.createTubeType(tubeTypeName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error crating tube type");
    }
}

/**
 * Tube Type controller call the service to update the Tube Type
 * 
 * Gets from the request
 *          @tubeTypeId from the req.params
 *          @tubeTypeName
 *
 * If everthing goes well
 *      - return status 200 with the updated Tube Type
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateTubeType (req: Request, res: Response): Promise<Response> {
    try {
        const tubeTypeId = Number(req.params.id);
        const tubeTypeName = String(req.body.name);

        if (!tubeTypeId || !tubeTypeName) return res.status(400).json("Missing data");

        const result = await biosampleService.updateTubeType(tubeTypeId, tubeTypeName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating tube type");
    }
}

/**
 * Tube Type controller call the service to delete the Tube Type
 * 
 * Gets from the request
 *          @tubeTypeId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the deleted Tube Type
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteTubeType (req: Request, res: Response): Promise<Response> {
    try {
        const tubeTypeId = Number(req.params.id);

        if (!tubeTypeId) return res.status(400).json("Missing data");

        const result = await biosampleService.deleteTubeType(tubeTypeId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting tube type");
    }
}

//------------------------
//-        Status        -
//------------------------

/**
 * Status controller call the service to get the Status
 * 
 * Gets from the request
 *          @statusId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getStatus (req: Request, res: Response): Promise<Response> {
    try {
        const statusId = Number(req.params.id);

        if (!statusId) return res.status(400).json("Missing data");

        const result = await biosampleService.getStatus(statusId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting status by id");
    }
}

/**
 * Status controller call the service to get all Status
 * 
 * If everthing goes well
 *      - return status 200 with all Status
 * On error
 *      - return status 500 and Error message
 */
export async function getAllStatus (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllStatus();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all status");
    }
}

/**
 * Status controller call the service to create the Status
 * 
 * Gets from the request
 *          @statusName
 *
 * If everthing goes well
 *      - return status 200 with created Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createStatus (req: Request, res: Response): Promise<Response> {
    try {
        const statusName = String(req.body.name);

        if (!statusName) return res.status(400).json("Missing data");

        const result = await biosampleService.createStatus(statusName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating status");
    }
}

/**
 * Status controller call the service to update the Status
 * 
 * Gets from the request
 *          @statusId from the req.params
 *          @statusName
 *
 * If everthing goes well
 *      - return status 200 with the updated Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateStatus (req: Request, res: Response): Promise<Response> {
    try {
        const statusId = Number(req.params.id);
        const name = String(req.body.name);

        if (!statusId || !name) return res.status(400).json("Missing data");

        const result = await biosampleService.updateStatus(statusId, name);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating status");
    }
}

/**
 * Status controller call the service to delete the Status
 * 
 * Gets from the request
 *          @statusId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the deleted Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteStatus (req: Request, res: Response): Promise<Response> {
    try {
        const statusId = Number(req.params.id);

        if (!statusId) return res.status(400).json("Missing data");

        const result = await biosampleService.deleteStatus(statusId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting status");
    }
}

//########################
//#        Study       #
//########################

//------------------------
//-        Study       -
//------------------------

/**
 * Study controller call the service to get the Study
 * 
 * Gets from the request
 *          @studyId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function getStudy (req: Request, res: Response): Promise<Response> {
    try {
        const studyId = Number(req.params.id);

        if (!studyId) return res.status(400).json("Missing data");

        const result = await biosampleService.getStudy(studyId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting study by id");
    }
}

/**
 * Study controller call the service to get all Studies
 * 
 * If everthing goes well
 *      - return status 200 with the Studies
 * On error
 *      - return status 500 and Error message
 */
export async function getAllStudies (req: Request, res: Response): Promise<Response> {
    try {
        const result = await biosampleService.getAllStudies();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error getting all studies");
    }
}

/**
 * Study controller call the service to create the Study
 * 
 * Gets from the request
 *          @studyName
 *
 * If everthing goes well
 *      - return status 200 with the created Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function createStudy (req: Request, res: Response): Promise<Response> {
    try {
        const studyName = String(req.body.name);

        if (!studyName) return res.status(400).json("Missing data");
        
        const result = await biosampleService.createStudy(studyName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error creating study");
    }
}

/**
 * Study controller call the service to update the Study
 * 
 * Gets from the request
 *          @studyId from the req.params
 *          @studyName
 *
 * If everthing goes well
 *      - return status 200 with the updated Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function updateStudy (req: Request, res: Response): Promise<Response> {
    try {
        const studyId = Number(req.params.id);
        const studyName = String(req.body.name);

        if (!studyId || !studyName) return res.status(400).json("Missing data");

        const result = await biosampleService.updateStudy(studyId, studyName);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error updating study");
    }
}

/**
 * Study controller call the service to delete the Study
 * 
 * Gets from the request
 *          @studyId from the req.params
 *
 * If everthing goes well
 *      - return status 200 with the deleted Status
 * On error
 *      - return status 400 if there is missing data
 *      - return status 500 and Error message
 */
export async function deleteStudy (req: Request, res: Response): Promise<Response> {
    try {
        const studyId = Number(req.params.id);

        if (!studyId) return res.status(400).json("Missing data");

        const result = await biosampleService.deleteStudy(studyId);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error deleting study");
    }
}
