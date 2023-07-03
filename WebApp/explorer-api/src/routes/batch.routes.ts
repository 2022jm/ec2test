import { Router } from 'express';

import { 
    getBioinformaticPipeline,
    getAllBioinformaticPipelines,
    createBioinformaticPipeline,
    updateBioinformaticPipeline,
    deleteBioinformaticPipeline,

    getBatch,
    getAllBatches,
    createBatch,
    updateBatch,
    deleteBatch,

    getPreprocess,
    getAllPreprocesses,
    createPreprocess,
    updatePreprocess,
    deletePreprocess,

    getCenter,
    getAllCenters,
    createCenter,
    updateCenter,
    deleteCenter,

    getLibraryPrepKit,
    getAllLibraryPrepKits,
    createLibraryPrepKit,
    updateLibraryPrepKit,
    deleteLibraryPrepKit,

    getPlatform,
    getAllPlatforms,
    createPlatform,
    updatePlatform,
    deletePlatform,

    getSoftware,
    getAllSoftwares,
    createSoftware,
    updateSoftware,
    deleteSoftware,
} from '../controllers/batch.controller'

const router = Router();

// Routes

//########################
//#        Batch         #
//########################

//------------------------
//-    Bioinformatic     -
//-       pipeline       -
//------------------------
router.get('/api/bioinformatic-pipeline/:id', getBioinformaticPipeline);
router.get('/api/bioinformatic-pipeline', getAllBioinformaticPipelines);
router.post('/api/bioinformatic-pipeline', createBioinformaticPipeline);
router.put('/api/bioinformatic-pipeline/:id', updateBioinformaticPipeline);
router.delete('/api/bioinformatic-pipeline/:id', deleteBioinformaticPipeline);

//------------------------
//-        Batch         -
//------------------------
router.get('/api/batch/:id', getBatch);
router.get('/api/batch', getAllBatches);
router.post('/api/batch', createBatch);
router.put('/api/batch/:id', updateBatch);
router.delete('/api/batch/:id', deleteBatch);

//########################
//#      Preprocess      #
//########################

//------------------------
//-      Preprocess      -
//------------------------
router.get('/api/preprocess/:id', getPreprocess);
router.get('/api/preprocess', getAllPreprocesses);
router.post('/api/preprocess', createPreprocess);
router.put('/api/preprocess/:id', updatePreprocess);
router.delete('/api/preprocess/:id', deletePreprocess);

//------------------------
//-        Center        -
//------------------------
router.get('/api/center/:id', getCenter);
router.get('/api/center', getAllCenters);
router.post('/api/center', createCenter);
router.put('/api/center/:id', updateCenter);
router.delete('/api/center/:id', deleteCenter);

//------------------------
//-   Library prep kit   -
//------------------------
router.get('/api/library-prep-kit/:id', getLibraryPrepKit);
router.get('/api/library-prep-kit', getAllLibraryPrepKits);
router.post('/api/library-prep-kit', createLibraryPrepKit);
router.put('/api/library-prep-kit/:id', updateLibraryPrepKit);
router.delete('/api/library-prep-kit/:id', deleteLibraryPrepKit);

//------------------------
//-       Platform       -
//------------------------
router.get('/api/platform/:id', getPlatform);
router.get('/api/platform', getAllPlatforms);
router.post('/api/platform', createPlatform);
router.put('/api/platform/:id', updatePlatform);
router.delete('/api/platform/:id', deletePlatform);

//------------------------
//-       Software       -
//------------------------
router.get('/api/software/:id', getSoftware);
router.get('/api/software', getAllSoftwares);
router.post('/api/software', createSoftware);
router.put('/api/software/:id', updateSoftware);
router.delete('/api/software/:id', deleteSoftware);

export default router;