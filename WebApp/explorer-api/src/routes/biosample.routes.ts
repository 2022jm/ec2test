import { Router } from 'express';

import {
    getParticipantBiosample,
    getAllParticipantBiosamples,
    createParticipantBiosample,
    updateParticipantBiosample,
    deleteParticipantBiosample,

    getBiosample,
    getAllBiosamples,
    createBiosample,
    updateBiosample,
    deleteBiosample,

    getTemperature,
    getAllTemperatures,
    createTemperature,
    updateTemperature,
    deleteTemperature,

    getTubeType,
    getAllTubeTypes,
    createTubeType,
    updateTubeType,
    deleteTubeType,

    getStatus,
    getAllStatus,
    createStatus,
    updateStatus,
    deleteStatus,

    getStudy,
    getAllStudies,
    createStudy,
    updateStudy,
    deleteStudy,

    getParticipantBiosampleTab
} from '../controllers/biosample.controller'

const router = Router();

// Routes

//########################
//#       Biosample      #
//########################

//------------------------
//-     Participant      -
//-      biosample       -
//------------------------
router.get('/api/participant-biosample/tab', getParticipantBiosampleTab);

router.get('/api/participant-biosample/:id', getParticipantBiosample);
router.get('/api/participant-biosample', getAllParticipantBiosamples);
router.post('/api/participant-biosample', createParticipantBiosample);
router.put('/api/participant-biosample/:id', updateParticipantBiosample);
router.delete('/api/participant-biosample/:id', deleteParticipantBiosample);

//------------------------
//-      Biosample       -
//------------------------
router.get('/api/biosample/:id', getBiosample);
router.get('/api/biosample', getAllBiosamples);
router.post('/api/biosample', createBiosample);
router.put('/api/biosample/:id', updateBiosample);
router.delete('/api/biosample/:id', deleteBiosample);

//------------------------
//-      Temperature     -
//------------------------
router.get('/api/temperature/:id', getTemperature);
router.get('/api/temperature/', getAllTemperatures);
router.post('/api/temperature', createTemperature);
router.put('/api/temperature/:id', updateTemperature);
router.delete('/api/temperature/:id', deleteTemperature);

//------------------------
//-      Tube type       -
//------------------------
router.get('/api/tube-type/:id', getTubeType);
router.get('/api/tube-type', getAllTubeTypes);
router.post('/api/tube-type', createTubeType);
router.put('/api/tube-type/:id', updateTubeType);
router.delete('/api/tube-type/:id', deleteTubeType);

//------------------------
//-        Status        -
//------------------------
router.get('/api/status/:id', getStatus);
router.get('/api/status', getAllStatus);
router.post('/api/status', createStatus);
router.put('/api/status/:id', updateStatus);
router.delete('/api/status/:id', deleteStatus);

//########################
//#        Study       #
//########################

//------------------------
//-        Study       -
//------------------------
router.get('/api/study/:id', getStudy);
router.get('/api/study', getAllStudies);
router.post('/api/study', createStudy);
router.put('/api/study/:id', updateStudy);
router.delete('/api/study/:id', deleteStudy);

export default router;