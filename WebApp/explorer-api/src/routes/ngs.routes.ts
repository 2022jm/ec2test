import { Router } from 'express';

import {
    getNgs,
    getAllNgs,
    createNgs,
    updateNgs,
    deleteNgs,

    getNgsType,
    getAllNgsTypes,
    createNgsType,
    updateNgsType,
    deleteNgsType,

    getSpike,
    getAllSpikes,
    createSpike,
    updateSpike,
    deleteSpike,

    getGenomeReference,
    getAllGenomeReferences,
    createGenomeReference,
    updateGenomeReference,
    deleteGenomeReference,

} from '../controllers/ngs.controller'

const router = Router();

// Routes

//########################
//#         NGS          #
//########################

//------------------------
//-         NGS          -
//------------------------
router.get('/api/ngs/:id', getNgs);
router.get('/api/ngs', getAllNgs);
router.post('/api/ngs', createNgs);
router.put('/api/ngs/:id', updateNgs);
router.delete('/api/ngs/:id', deleteNgs);

//------------------------
//-       NGS type       -
//------------------------
router.get('/api/ngs-type/:id', getNgsType);
router.get('/api/ngs-type', getAllNgsTypes);
router.post('/api/ngs-type', createNgsType);
router.put('/api/ngs-type/:id', updateNgsType);
router.delete('/api/ngs-type/:id', deleteNgsType);

//------------------------
//-        Spike         -
//------------------------
router.get('/api/spike/:id', getSpike);
router.get('/api/spike', getAllSpikes);
router.post('/api/spike', createSpike);
router.put('/api/spike/:id', updateSpike);
router.delete('/api/spike/:id', deleteSpike);

//------------------------
//-   Genome reference   -
//------------------------
router.get('/api/genome-reference/:id', getGenomeReference);
router.get('/api/genome-reference', getAllGenomeReferences);
router.post('/api/genome-reference', createGenomeReference);
router.put('/api/genome-reference/:id', updateGenomeReference);
router.delete('/api/genome-reference/:id', deleteGenomeReference);

export default router;