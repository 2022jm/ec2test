import { Router } from 'express';

import {
    getParticipant,
    getAllParticipants,
    createParticipant,
    updateParticipant,
    deleteParticipant,

    getGender,
    getAllGenders,
    createGender,
    updateGender,
    deleteGender,

    getRace,
    getAllRaces,
    createRace,
    updateRace,
    deleteRace,

    getCategory,
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,

    getFamilyRelationship,
    getAllFamilyRelationships,
    createFamilyRelationship,
    updateFamilyRelationship,
    deleteFamilyRelationship,

    getRelationshipType,
    getAllRelationshipTypes,
    createRelationshipType,
    updateRelationshipType,
    deleteRelationshipType,

    getAllPhenotypesByParticipants,
    getAllBiosamplesByParticipant,
    getParticipantTab,
    getParticipantsPhenotypesTable,
} from '../controllers/participant.controller'
import {  } from '../services/participant.service';

const router = Router();

// Routes
//########################
//#      Participant     #
//########################

//------------------------
//-     Participant      -
//------------------------
router.get('/api/participant/phenotypes', getAllPhenotypesByParticipants);
router.get('/api/participant-phenotypes', getParticipantsPhenotypesTable);
router.get('/api/participant/tab', getParticipantTab);

router.get('/api/participant/:id', getParticipant);
router.get('/api/participant', getAllParticipants);
router.post('/api/participant', createParticipant);
router.put('/api/participant/:id', updateParticipant);
router.delete('/api/participant/:id', deleteParticipant);

//------------------------
//-        Gender        -
//------------------------
router.get('/api/gender/:id', getGender);
router.get('/api/gender', getAllGenders);
router.post('/api/gender', createGender);
router.put('/api/gender/:id', updateGender);
router.delete('/api/gender/:id', deleteGender);

//------------------------
//-         Race         -
//------------------------
router.get('/api/race/:id', getRace);
router.get('/api/race', getAllRaces);
router.post('/api/race', createRace);
router.put('/api/race/:id', updateRace);
router.delete('/api/race/:id', deleteRace);

//------------------------
//-       Category       -
//------------------------
router.get('/api/category/:id', getCategory);
router.get('/api/category', getAllCategories);
router.post('/api/category', createCategory);
router.put('/api/category/:id', updateCategory);
router.delete('/api/category/:id', deleteCategory);

//########################
//#        Family        #
//########################

//------------------------
//-        Family        -
//-     relationship     -
//------------------------
router.get('/api/family-relationship/:id', getFamilyRelationship);
router.get('/api/family-relationship', getAllFamilyRelationships);
router.post('/api/family-relationship', createFamilyRelationship);
router.put('/api/family-relationship/:id', updateFamilyRelationship);
router.delete('/api/family-relationship/:id', deleteFamilyRelationship);

//------------------------
//-  Relationship type   -
//------------------------
router.get('/api/relationship-type/:id', getRelationshipType);
router.get('/api/relationship-type', getAllRelationshipTypes);
router.post('/api/relationship-type', createRelationshipType);
router.put('/api/relationship-type/:id', updateRelationshipType);
router.delete('/api/relationship-type/:id', deleteRelationshipType);

router.get('/api/participant/:id/biosample', getAllBiosamplesByParticipant);

export default router;