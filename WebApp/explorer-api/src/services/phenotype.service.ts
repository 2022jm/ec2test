import { Observed, OntologyRelationship, OntologyType, ParticipantPhenotypeRelationship, Phenotype, PhenotypeOntology, PhenotypePhenotypeRelationship, PhenotypeSource, PhenotypeType, PrismaClient, SourceType } from "@prisma/client";

const prisma = new PrismaClient();

const participantPhenotypeRelationshipRepository = prisma.participantPhenotypeRelationship;
const observedRepository = prisma.observed;
const sourceTypeRepository = prisma.sourceType;
const phenotypeSourceRepository = prisma.phenotypeSource;
const ontologyRelationshipRepository = prisma.ontologyRelationship;
const phenotypeOntologyRepository = prisma.phenotypeOntology;
const ontologyTypeRepository = prisma.ontologyType;
const phenotypeRepository = prisma.phenotype;
const phenotypePhenotypeRelationshipRepository = prisma.phenotypePhenotypeRelationship;
const phenotypeTypeRepository = prisma.phenotypeType;

//########################
//#     Relationship     #
//########################

//------------------------
//-      Participant     -
//-       phenotype      -
//-     relationship     -
//------------------------

/**
 * Get ParticipantPhenotypeRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<ParticipantPhenotypeRelationship>} ParticipantPhenotypeRelationship data
 * @returns {Promise<null>} not found
 */
export async function getParticipantPhenotypeRelationship(id: number): Promise<ParticipantPhenotypeRelationship | null> {
    try {
        return await participantPhenotypeRelationshipRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getParticipantPhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service getParticipantPhenotypeRelationship";
    }
}

/**
 * Get all ParticipantPhenotypeRelationship data
 * 
 * @returns {Promise<ParticipantPhenotypeRelationship[]>} all ParticipantPhenotypeRelationship data
 */
export async function getAllParticipantPhenotypeRelationships(): Promise<ParticipantPhenotypeRelationship[]> {
    try {
        return await participantPhenotypeRelationshipRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllParticipantPhenotypeRelationships");
        console.error(err);
        throw "Error phenotype service getAllParticipantPhenotypeRelationships";
    }
}

/**
 * Create ParticipantPhenotypeRelationship with provided data
 * 
 * @param  {number} participantId
 * @param  {number} phenotypeId
 * @param  {number} phenotypeSourceId
 * @param  {number} probability
 * @param  {number} observedId
 * @returns {Promise<ParticipantPhenotypeRelationship>} ParticipantPhenotypeRelationship created
 */
export async function createParticipantPhenotypeRelationship(participantId: number, phenotypeId: number, phenotypeSourceId: number, probability: number, observedId: number): Promise<ParticipantPhenotypeRelationship> {
    try {
        return await participantPhenotypeRelationshipRepository.create({
            data: {
                participantId: participantId,
                phenotypeId: phenotypeId,
                phenotypeSourceId: phenotypeSourceId,
                probability: probability,
                observedId: observedId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createParticipantPhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service createParticipantPhenotypeRelationship";
    }
}

/**
 * Update ParticipantPhenotypeRelationship with provided id and data
 * 
 * @param  {number} id
 * @param  {number} participantId
 * @param  {number} phenotypeId
 * @param  {number} phenotypeSourceId
 * @param  {number} probability
 * @param  {number} observedId
 * @returns {Promise<ParticipantPhenotypeRelationship>} updated ParticipantPhenotypeRelationship
 */
export async function updateParticipantPhenotypeRelationship(id: number, participantId: number, phenotypeId: number, phenotypeSourceId: number, probability: number, observedId: number): Promise<ParticipantPhenotypeRelationship> {
    try {
        return await participantPhenotypeRelationshipRepository.update({
            where: {
                id: id,
            },
            data: {
                participantId: participantId,
                phenotypeId: phenotypeId,
                phenotypeSourceId: phenotypeSourceId,
                probability: probability,
                observedId: observedId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updateParticipantPhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service updateParticipantPhenotypeRelationship";
    }
}

/**
 * Delete ParticipantPhenotypeRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<ParticipantPhenotypeRelationship>} deleted ParticipantPhenotypeRelationship
 */
export async function deleteParticipantPhenotypeRelationship(id: number): Promise<ParticipantPhenotypeRelationship> {
    try {
        return await participantPhenotypeRelationshipRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deleteParticipantPhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service deleteParticipantPhenotypeRelationship";
    }
}

//------------------------
//-       Observed       -
//------------------------

/**
 * Get observed with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Observed>} Observed data
 * @returns {Promise<null>} not found
 */
export async function getObserved(id: number): Promise<Observed | null> {
    try {
        return await observedRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getObserved");
        console.error(err);
        throw "Error phenotype service getObserved";
    }
}

/**
 * Get all Observed
 * 
 * @returns {Promise<Observed[]>{}} all Observed data
 */
export async function getAllObserved(): Promise<Observed[]> {
    try {
        return await observedRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllObserved");
        console.error(err);
        throw "Error phenotype service getAllObserved";
    }
}

/**
 * Create Observed with provided data
 * 
 * @param  {string} name
 * @returns {Promise<Observed>} Observed created 
 */
export async function createObserved(name: string): Promise<Observed> {
    try {
        return await observedRepository.create({
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createObserved");
        console.error(err);
        throw "Error phenotype service createObserved";
    }
}

/**
 * Update Observed with provided id and name
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<Observed>} updated Observed
 */
export async function updateObserved(id: number, name: string): Promise<Observed> {
    try {
        return await observedRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updateObserved");
        console.error(err);
        throw "Error phenotype service updateObserved";
    }
}

/**
 * Delete Observed with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Observed>} deleted Observed
 */
export async function deleteObserved(id: number): Promise<Observed> {
    try {
        return await observedRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deleteObserved");
        console.error(err);
        throw "Error phenotype service deleteObserved";
    }
}

//------------------------
//-     Source type      -
//------------------------

/**
 * Get SourceType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<SourceType>} SourceType data
 * @returns {Promise<null>} not found
 */
export async function getSourceType(id: number): Promise<SourceType | null> {
    try {
        return await sourceTypeRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getSourceType");
        console.error(err);
        throw "Error phenotype service getSourceType";
    }
}

/**
 * Get all SourceTypes
 * 
 * @returns {Promise<SourceType[]>} all SourceType data
 */
export async function getAllSourceTypes(): Promise<SourceType[]> {
    try {
        return await sourceTypeRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllSourceTypes");
        console.error(err);
        throw "Error phenotype service getAllSourceTypes";
    }
}

/**
 * Create SourceType with provided data
 * 
 * @param  {string} name
 * @returns {Promise<SourceType>} SourceType created
 */
export async function createSourceType(name: string): Promise<SourceType> {
    try {
        return await sourceTypeRepository.create({
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createSourceType");
        console.error(err);
        throw "Error phenotype service createSourceType";
    }
}

/**
 * Update SourceType with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<SourceType>} updated SourceType
 */
export async function updateSourceType(id: number, name: string): Promise<SourceType> {
    try {
        return await sourceTypeRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updateSourceType");
        console.error(err);
        throw "Error phenotype service updateSourceType";
    }
}

/**
 * Delete SourceType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<SourceType>} deleted SourceType
 */
export async function deleteSourceType(id: number): Promise<SourceType> {
    try {
        return await sourceTypeRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deleteSourceType");
        console.error(err);
        throw "Error phenotype service deleteSourceType";
    }
}

//------------------------
//-       Phenotype      -
//-        source        -
//------------------------

/**
 * Get PhenotypeSource with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypeSource>} PhenotypeSource data
 * @returns {Promise<null>} not found
 */
export async function getPhenotypeSource(id: number): Promise<PhenotypeSource | null> {
    try {
        return await phenotypeSourceRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype source getPhenotypeSource");
        console.error(err);
        throw "Error phenotype service getPhenotypeSource";
    }
}

/**
 * Get all PhenotypeSource
 * 
 * @returns {Promise<PhenotypeSource[]>} all PhenotypeSource data
 */
export async function getAllPhenotypeSources(): Promise<PhenotypeSource[]> {
    try {
        return await phenotypeSourceRepository.findMany();
    } catch (err) {
        console.error("Error phenotype source getAllPhenotypeSources");
        console.error(err);
        throw "Error phenotype service getAllPhenotypeSources";
    }
}

/**
 * Create PhenotypeSource with provided data
 * 
 * @param  {string} name
 * @param  {number} sourceTypeId
 * @returns {Promise<PhenotypeSource>} PhenotypeSource created
 */
export async function createPhenotypeSource(name: string, sourceTypeId: number): Promise<PhenotypeSource> {
    try {
        return await phenotypeSourceRepository.create({
            data: {
                name: name,
                sourceTypeId: sourceTypeId,
            },
        });
    } catch (err) {
        console.error("Error phenotype source createPhenotypeSource");
        console.error(err);
        throw "Error phenotype service createPhenotypeSource";
    }
}

/**
 * Update PhenotypeSource with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @param  {number} sourceTypeId
 * @returns {Promise<PhenotypeSource>} updated PhenotypeSource
 */
export async function updatePhenotypeSource(id: number, name: string, sourceTypeId: number): Promise<PhenotypeSource> {
    try {
        return await phenotypeSourceRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                sourceTypeId: sourceTypeId,
            },
        });
    } catch (err) {
        console.error("Error phenotype source updatePhenotypeSource");
        console.error(err);
        throw "Error phenotype service updatePhenotypeSource";
    }
}

/**
 * Delete PhenotypeSource with provided id
 * 
 * @param  {number} id
 * @returns {Promise∂<PhenotypeSource>} deleted PhenotypeSource
 */
export async function deletePhenotypeSource(id: number): Promise<PhenotypeSource> {
    try {
        return await phenotypeSourceRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype source deletePhenotypeSource");
        console.error(err);
        throw "Error phenotype service deletePhenotypeSource";
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
 * Get OntologyRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<OntologyRelationship>} OntologyRelationship data
 * @returns {Promise<null>} not found
 */
export async function getOntologyRelationship(id: number): Promise<OntologyRelationship | null> {
    try {
        return await ontologyRelationshipRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getOntologyRelationship");
        console.error(err);
        throw "Error phenotype service getOntologyRelationship";
    }
}

/**
 * Get all OntologyRelationship data
 * @returns {Promise<OntologyRelationship[]>} all OntologyRelationship data
 */
export async function getAllOntologyRelationships(): Promise<OntologyRelationship[]> {
    try {
        return await ontologyRelationshipRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllOntologyRelationships");
        console.error(err);
        throw "Error phenotype service getAllOntologyRelationships";
    }
}

/**
 * Create OntologyRelationship with provided data
 * 
 * @param  {number} phenotypeId
 * @param  {number} phenotypeOntologyId
 * @returns {Promise<OntologyRelationship>} OntologyRelationship created
 */
export async function createOntologyRelationship(phenotypeId: number, phenotypeOntologyId: number): Promise<OntologyRelationship> {
    try {
        return await ontologyRelationshipRepository.create({
            data: {
                phenotypeId: phenotypeId,
                phenotypeOntologyId: phenotypeOntologyId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createOntologyRelationship");
        console.error(err);
        throw "Error phenotype service createOntologyRelationship";
    }
}

/**
 * Update OntologyRelationship with provided id and data
 * 
 * @param  {number} id
 * @param  {number} phenotypeId
 * @param  {number} phenotypeOntologyId
 * @returns {Promise<OntologyRelationship>} updated OntologyRelationship
 */
export async function updateOntologyRelationship(id: number, phenotypeId: number, phenotypeOntologyId: number): Promise<OntologyRelationship> {
    try {
        return await ontologyRelationshipRepository.update({
            where: {
                id: id,
            },
            data: {
                phenotypeId: phenotypeId,
                phenotypeOntologyId: phenotypeOntologyId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updateOntologyRelationship");
        console.error(err);
        throw "Error phenotype service updateOntologyRelationship";
    }
}

/**
 * Delete OntologyRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<OntologyRelationship>} deleted OntologyRelationship
 */
export async function deleteOntologyRelationship(id: number): Promise<OntologyRelationship> {
    try {
        return await ontologyRelationshipRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deleteOntologyRelationship");
        console.error(err);
        throw "Error phenotype service deleteOntologyRelationship";
    }
}

//------------------------
//-      Phenotype       -
//-      ontology       -
//------------------------
/**
 * Get PhenotypeOntology with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypeOntology>} PhenotypeOntology data
 */
export async function getPhenotypeOntology(id: number): Promise<PhenotypeOntology | null> {
    try {
        return await phenotypeOntologyRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getPhenotypeOntology");
        console.error(err);
        throw "Error phenotype service getPhenotypeOntology";
    }
}

/**
 * Get all PhenotypeOntology
 * 
 * @returns {Promise<PhenotypeOntology[]>} all PhenotypeOntology data
 */
export async function getAllPhenotypeOntologies(): Promise<PhenotypeOntology[]> {
    try {
        return await phenotypeOntologyRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllPhenotypeOntologies");
        console.error(err);
        throw "Error phenotype service getAllPhenotypeOntologies";
    }
}

/**
 * Create PhenotypeOntology with provided data
 * 
 * @param  {string} name
 * @param  {number} ontologyTypeId
 * @returns {Promise<PhenotypeOntology>} PhenotypeOntology created
 */
export async function createPhenotypeOntology(name: string, ontologyTypeId: number): Promise<PhenotypeOntology> {
    try {
        return await phenotypeOntologyRepository.create({
            data: {
                name: name,
                ontologyTypeId: ontologyTypeId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createPhenotypeOntology");
        console.error(err);
        throw "Error phenotype service createPhenotypeOntology";
    }
}

/**
 * Update PhenotypeOntology with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @param  {number} ontologyTypeId
 * @returns {Promise<PhenotypeOntology>} updated PhenotypeOntology
 */
export async function updatePhenotypeOntology(id: number, name: string, ontologyTypeId: number): Promise<PhenotypeOntology> {
    try {
        return await phenotypeOntologyRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                ontologyTypeId: ontologyTypeId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updatePhenotypeOntology");
        console.error(err);
        throw "Error phenotype service updatePhenotypeOntology";
    }
}

/**
 * Delete PhenotypeOntology with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypeOntology>} deleted PhenotypeOntology
 */
export async function deletePhenotypeOntology(id: number): Promise<PhenotypeOntology> {
    try {
        return await phenotypeOntologyRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deletePhenotypeOntology");
        console.error(err);
        throw "Error phenotype service deletePhenotypeOntology";
    }
}

//------------------------
//-    Ontology type    -
//------------------------

/**
 * Get OntologyType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<OntologyType>} OntologyType data
 * @returns {Promise<null>} not found
 */
export async function getOntologyType(id: number): Promise<OntologyType | null> {
    try {
        return await ontologyTypeRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getOntologyType");
        console.error(err);
        throw "Error phenotype service getOntologyType";
    }
}

/**
 * Get all OntologyTypes data
 * @returns {Promise<OntologyType[]>} all OntologyType data
 */
export async function getAllOntologyTypes(): Promise<OntologyType[]> {
    try {
        return await ontologyTypeRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllOntologyTypes");
        console.error(err);
        throw "Error phenotype service getAllOntologyTypes";
    }
}

/**
 * Create OntologyType with provided data
 * 
 * @param  {string} name
 * @returns {Promise<OntologyType>} OntologyType created
 */
export async function createOntologyType(name: string): Promise<OntologyType> {
    try {
        return await ontologyTypeRepository.create({
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createOntologyType");
        console.error(err);
        throw "Error phenotype service createOntologyType";
    }
}

/**
 * Update OntologyType with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<OntologyType>} updated OntologyType
 */
export async function updateOntologyType(id: number, name: string): Promise<OntologyType> {
    try {
        return await ontologyTypeRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updateOntologyType");
        console.error(err);
        throw "Error phenotype service updateOntologyType";
    }
}

/**
 * Delete OntologyType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<OntologyType>} deleted OntologyType
 */
export async function deleteOntologyType(id: number): Promise<OntologyType> {
    try {
        return await ontologyTypeRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deleteOntologyType");
        console.error(err);
        throw "Error phenotype service deleteOntologyType";
    }
}

//########################
//#      Phenotypes      #
//########################

//------------------------
//-      Phenotype       -
//------------------------

/**
 * Get Phenotype with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Phenotype>}
 */
export async function getPhenotype(id: number): Promise<Phenotype | null> {
    try {
        return await phenotypeRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getPhenotype");
        console.error(err);
        throw "Error phenotype service getPhenotype";
    }
}

/**
 * Get all Phenotype data
 * @returns {Promise<Phenotype[]>} all Phenotype data
 */
export async function getAllPhenotypes(): Promise<Phenotype[]> {
    try {
        return await phenotypeRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllPhenotypes");
        console.error(err);
        throw "Error phenotype service getAllPhenotypes";
    }
}

/**
 * Create Phenotype with provided data
 * 
 * @param  {string} name
 * @returns {Promise<Phenotype>} Phenotype created
 */
export async function createPhenotype(name: string): Promise<Phenotype> {
    try {
        return await phenotypeRepository.create({
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createPhenotype");
        console.error(err);
        throw "Error phenotype service createPhenotype";
    }
}

/**
 * Update Phenotype with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<Phenotype>} updated Phenotype
 */
export async function updatePhenotype(id: number, name: string): Promise<Phenotype> {
    try {
        return await phenotypeRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updatePhenotype");
        console.error(err);
        throw "Error phenotype service updatePhenotype";
    }
}

/**
 * Delete Phenotype with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Phenotype>} deleted Phenotype
 */
export async function deletePhenotype(id: number): Promise<Phenotype> {
    try {
        return await phenotypeRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deletePhenotype");
        console.error(err);
        throw "Error phenotype service deletePhenotype";
    }
}

/**
 * Get Phenotype with all the ontology and ontology type that this phenotype has
 * 
 * // TODO: return type as interface
 * @param  {number} id
 * @returns {Promise<any>}
 */
export async function getPhenotypeDetail(id: number): Promise<any> {
    const res = await prisma.phenotype.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            name: true,

            ontologyRelationship: {
                select: {
                    id: true,
                    phenotypeOntology: {
                        select: {
                            id: true,
                            name: true,
                            ontologyType: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return res;
}

//------------------------
//-       Phenotype      -
//-       phenotype      -
//-     relationship     -
//------------------------

/**
 * Get PhenotypePhenotypeRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypePhenotypeRelationship>} PhenotypePhenotypeRelationship data
 * @returns {Promise<null>} not found
 */
export async function getPhenotypePhenotypeRelationship(id: number): Promise<PhenotypePhenotypeRelationship | null> {
    try {
        return await phenotypePhenotypeRelationshipRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getPhenotypePhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service getPhenotypePhenotypeRelationship";
    }
}

/**
 * Get all PhenotypePhenotypeRelationship data
 * 
 * @returns {Promise<PhenotypePhenotypeRelationship[]>} all PhenotypePhenotypeRelationship data
 */
export async function getAllPhenotypePhenotypeRelationships(): Promise<any[]> {
    try {
        return await phenotypePhenotypeRelationshipRepository.findMany({
            select: {
                phenotypePhenotypeRelationship1: true,
                phenotypePhenotypeRelationship2: true,
            }
        });
    } catch (err) {
        console.error("Error phenotype service getAllPhenotypePhenotypeRelationships");
        console.error(err);
        throw "Error phenotype service getAllPhenotypePhenotypeRelationships";
    }
}

/**
 * Create PhenotypePhenotypeRelationship with provided data
 * 
 * @param  {number} phenotype1Id
 * @param  {number} phenotype2Id
 * @param  {number} phenotypeTypeId
 * @returns {Promise<PhenotypePhenotypeRelationship>} PhenotypePhenotypeRelationship created
 */
export async function createPhenotypePhenotypeRelationship(phenotype1Id: number, phenotype2Id: number, phenotypeTypeId: number): Promise<PhenotypePhenotypeRelationship> {
    try {
        return await phenotypePhenotypeRelationshipRepository.create({
            data: {
                phenotype1Id: phenotype1Id,
                phenotype2Id: phenotype2Id,
                phenotypeTypeId: phenotypeTypeId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createPhenotypePhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service createPhenotypePhenotypeRelationship";
    }
}

/**
 * Update PhenotypePhenotypeRelationship with provided id and data
 * 
 * @param  {number} id
 * @param  {number} phenotype1Id
 * @param  {number} phenotype2Id
 * @param  {number} phenotypeTypeId
 * @returns {Promise<PhenotypePhenotypeRelationship>} updated PhenotypePhenotypeRelationship
 */
export async function updatePhenotypePhenotypeRelationship(id: number, phenotype1Id: number, phenotype2Id: number, phenotypeTypeId: number): Promise<PhenotypePhenotypeRelationship> {
    try {
        return await phenotypePhenotypeRelationshipRepository.update({
            where: {
                id: id,
            },
            data: {
                phenotype1Id: phenotype1Id,
                phenotype2Id: phenotype2Id,
                phenotypeTypeId: phenotypeTypeId,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updatePhenotypePhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service updatePhenotypePhenotypeRelationship";
    }
}

/**
 * Delete PhenotypePhenotypeRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypePhenotypeRelationship>} delete PhenotypePhenotypeRelationship
 */
export async function deletePhenotypePhenotypeRelationship(id: number): Promise<PhenotypePhenotypeRelationship> {
    try {
        return await phenotypePhenotypeRelationshipRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deletePhenotypePhenotypeRelationship");
        console.error(err);
        throw "Error phenotype service deletePhenotypePhenotypeRelationship";
    }
}

//------------------------
//-    Phenotype type    -
//------------------------

/**
 * Get PhenotypeType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypeType>} PhenotypeType data
 * @returns {Promise<null>} not found
 */
export async function getPhenotypeType(id: number): Promise<PhenotypeType | null> {
    try {
        return await phenotypeTypeRepository.findUnique({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service getPhenotypeType");
        console.error(err);
        throw "Error phenotype service getPhenotypeType";
    }
}

/**
 * Get all PhenotypeTypes
 * 
 * @returns {Promise<PhenotypeType[]>} all PhenotypeType data
 */
export async function getAllPhenotypeTypes(): Promise<PhenotypeType[]> {
    try {
        return await phenotypeTypeRepository.findMany();
    } catch (err) {
        console.error("Error phenotype service getAllPhenotypeTypes");
        console.error(err);
        throw "Error phenotype service getAllPhenotypeTypes";
    }
}

/**
 * Create PhenotypeType with provided name
 * 
 * @param  {string} name
 * @returns {Promise<PhenotypeType>} PhenotypeType created
 */
export async function createPhenotypeType(name: string): Promise<PhenotypeType> {
    try {
        return await phenotypeTypeRepository.create({
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service createPhenotypeType");
        console.error(err);
        throw "Error phenotype service createPhenotypeType";
    }
}

/**
 * Update PhenotypeType with provided id and name
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<PhenotypeType>} updated PhenotypeType
 */
export async function updatePhenotypeType(id: number, name: string): Promise<PhenotypeType> {
    try {
        return await phenotypeTypeRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error phenotype service updatePhenotypeType");
        console.error(err);
        throw "Error phenotype service updatePhenotypeType";
    }
}

/**
 * Delete PhenotypeType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<PhenotypeType>} deleted PhenotypeType
 */
export async function deletePhenotypeType(id: number): Promise<PhenotypeType> {
    try {
        return await phenotypeTypeRepository.delete({
            where: {
                id: id,
            },
        });
    } catch (err) {
        console.error("Error phenotype service deletePhenotypeType");
        console.error(err);
        throw "Error phenotype service deletePhenotypeType";
    }
}
