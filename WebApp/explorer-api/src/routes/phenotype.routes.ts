import { Router } from 'express';

import {
    getParticipantPhenotypeRelationship,
    getAllParticipantPhenotypeRelationships,
    createParticipantPhenotypeRelationship,
    updateParticipantPhenotypeRelationship,
    deleteParticipantPhenotypeRelationship,

    getObserved,
    getAllObserved,
    createObserved,
    updateObserved,
    deleteObserved,

    getSourceType,
    getAllSourceTypes,
    createSourceType,
    updateSourceType,
    deleteSourceType,

    getPhenotypeSource,
    getAllPhenotypeSources,
    createPhenotypeSource,
    updatePhenotypeSource,
    deletePhenotypeSource,

    getOntologyRelationship,
    getAllOntologyRelationships,
    createOntologyRelationship,
    updateOntologyRelationship,
    deleteOntologyRelationship,

    getPhenotypeOntology,
    getAllPhenotypeOntologies,
    createPhenotypeOntology,
    updatePhenotypeOntology,
    deletePhenotypeOntology,

    getOntologyType,
    getAllOntologyTypes,
    createOntologyType,
    updateOntologyType,
    deleteOntologyType,

    getPhenotype,
    getAllPhenotypes,
    createPhenotype,
    updatePhenotype,
    deletePhenotype,

    getPhenotypePhenotypeRelationship,
    getAllPhenotypePhenotypeRelationships,
    createPhenotypePhenotypeRelationship,
    updatePhenotypePhenotypeRelationship,
    deletePhenotypePhenotypeRelationship,

    getPhenotypeType,
    getAllPhenotypeTypes,
    createPhenotypeType,
    updatePhenotypeType,
    deletePhenotypeType,

    getPhenotypeDetail,
} from '../controllers/phenotype.controller'

const router = Router();

// Routes

//########################
//#     Relationship     #
//########################

//------------------------
//-      Participant     -
//-       phenotype      -
//-     relationship     -
//------------------------
router.get('/api/participant-phenotype-relationship/:id', getParticipantPhenotypeRelationship);
router.get('/api/participant-phenotype-relationship', getAllParticipantPhenotypeRelationships);
router.post('/api/participant-phenotype-relationship', createParticipantPhenotypeRelationship);
router.put('/api/participant-phenotype-relationship/:id', updateParticipantPhenotypeRelationship);
router.delete('/api/participant-phenotype-relationship/:id', deleteParticipantPhenotypeRelationship);

//------------------------
//-       Observed       -
//------------------------
router.get('/api/observed/:id', getObserved);
router.get('/api/observed', getAllObserved);
router.post('/api/observed', createObserved);
router.put('/api/observed/:id', updateObserved);
router.delete('/api/observed/:id', deleteObserved);

//------------------------
//-     Source type      -
//------------------------
router.get('/api/source-type/:id', getSourceType);
router.get('/api/source-type', getAllSourceTypes);
router.post('/api/source-type', createSourceType);
router.put('/api/source-type/:id', updateSourceType);
router.delete('/api/source-type/:id', deleteSourceType);

//------------------------
//-       Phenotype      -
//-        source        -
//------------------------
router.get('/api/phenotype-source/:id', getPhenotypeSource);
router.get('/api/phenotype-source', getAllPhenotypeSources);
router.post('/api/phenotype-source', createPhenotypeSource);
router.put('/api/phenotype-source/:id', updatePhenotypeSource);
router.delete('/api/phenotype-source/:id', deletePhenotypeSource);


//########################
//#      Ontology       #
//########################

//------------------------
//-       Ontology      -
//-     relationship     -
//------------------------
router.get('/api/ontology-relationship/:id', getOntologyRelationship);
router.get('/api/ontology-relationship', getAllOntologyRelationships);
router.post('/api/ontology-relationship', createOntologyRelationship);
router.put('/api/ontology-relationship/:id', updateOntologyRelationship);
router.delete('/api/ontology-relationship/:id', deleteOntologyRelationship);

//------------------------
//-      Phenotype       -
//-      ontology       -
//------------------------
router.get('/api/phenotype-ontology/:id', getPhenotypeOntology);
router.get('/api/phenotype-ontology', getAllPhenotypeOntologies);
router.post('/api/phenotype-ontology', createPhenotypeOntology);
router.put('/api/phenotype-ontology/:id', updatePhenotypeOntology);
router.delete('/api/phenotype-ontology/:id', deletePhenotypeOntology);

//------------------------
//-    Ontology type    -
//------------------------
router.get('/api/ontology-type/:id', getOntologyType);
router.get('/api/ontology-type', getAllOntologyTypes);
router.post('/api/ontology-type', createOntologyType);
router.put('/api/ontology-type/:id', updateOntologyType);
router.delete('/api/ontology-type/:id', deleteOntologyType);

//########################
//#      Phenotypes      #
//########################

//------------------------
//-      Phenotype       -
//------------------------
router.get('/api/phenotype/:id', getPhenotype);
router.get('/api/phenotype', getAllPhenotypes);
router.post('/api/phenotype', createPhenotype);
router.put('/api/phenotype/:id', updatePhenotype);
router.delete('/api/phenotype/:id', deletePhenotype);

//------------------------
//-       Phenotype      -
//-       phenotype      -
//-     relationship     -
//------------------------
router.get('/api/phenotype-phenotype-relationship/:id', getPhenotypePhenotypeRelationship);
router.get('/api/phenotype-phenotype-relationship', getAllPhenotypePhenotypeRelationships);
router.post('/api/phenotype-phenotype-relationship', createPhenotypePhenotypeRelationship);
router.put('/api/phenotype-phenotype-relationship/:id', updatePhenotypePhenotypeRelationship);
router.delete('/api/phenotype-phenotype-relationship/:id', deletePhenotypePhenotypeRelationship);

//------------------------
//-    Phenotype type    -
//------------------------
router.get('/api/phenotype-type/:id', getPhenotypeType);
router.get('/api/phenotype-type', getAllPhenotypeTypes);
router.post('/api/phenotype-type', createPhenotypeType);
router.put('/api/phenotype-type/:id', updatePhenotypeType);
router.delete('/api/phenotype-type/:id', deletePhenotypeType);

router.get('/api/phenotype-detail/:id', getPhenotypeDetail);

export default router;