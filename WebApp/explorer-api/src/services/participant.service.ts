import {
    Category, FamilyRelationship,
    FamilyRelationshipType, Gender, Participant, PrismaClient, Race
} from "@prisma/client";

const prisma = new PrismaClient();

const participantPhenotypeRelationshipRepository = prisma.participantPhenotypeRelationship;
const participantRepository = prisma.participant;
const genderRepository = prisma.gender;
const raceRepository = prisma.race;
const categoryRepository = prisma.category;
const familyRelationshipRepository = prisma.familyRelationship;
const familyRelationshipTypeRepository = prisma.familyRelationshipType;

const currentYear: number = Number(new Date().getFullYear());

//########################
//#      Participant     #
//########################

//------------------------
//-     Participant      -
//------------------------

type dateOfBirth = {
    dateOfBirth: Date | null;
};

type ParticipantWithAge<T> = T & {
    age: number | null;
};

/**
 * Add Age (virtual field) attribute into participant object
 * 
 * @param  {Participant} participant
 * @returns {ParticipantWithAge}
 */
function computeParticipantAge<Participant extends dateOfBirth>(participant: Participant): ParticipantWithAge<Participant> {
    let age = null;
    if(participant.dateOfBirth){
        age = currentYear - (new Date(participant.dateOfBirth).getFullYear())
    }
    return {
        ...participant,
        age: age,
    };
}

export async function getParticipantTab() {
    try {
        const result = await participantRepository.findMany({
            select: {
                id: true,
                internalId: true,
                externalId: true,
                gender: true,
                race: true,
                dateOfBirth: true,
                category: true,
                _count: {
                    select: {
                        participantBiosample: true,
                    }
                }
            }
        })

        let list = [];
        for (let i = 0; i < result.length; i++) {
            list.push(computeParticipantAge(result[i]));
        }
        return list;
    } catch (err) {
        console.error("Error participant tab");
        console.error(err);
        throw "Error participant service getParticipantTab";
    }
}

/**
 * Get Participant data with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Participant>} Participant data
 * @returns {Promise<null>} not found
 */
export async function getParticipant(id: number): Promise<ParticipantWithAge<Participant> | null> {
    try {
        const participant = await participantRepository.findUnique({
            where: {
                id: id,
            },
        });
        const result = computeParticipantAge(participant!);
        return result;
    } catch (err) {
        console.error("Error participant service getParticipant");
        console.error(err);
        throw "Error participant service getParticipant";
    }
}

/**
 * Get all Participant data
 * @returns {Promise<Participant[]>} all Participant data
 */
export async function getAllParticipants(): Promise<Participant[]> {
    try {
        let result: any = [];
        const participants = await participantRepository.findMany();
        for (let i = 0; i < participants.length; i++) {
            const participant = participants[i];
            const participantWithAge = computeParticipantAge(participant);
            result.push(participantWithAge);
        }
        return result;
    } catch (err) {
        console.error("Error participant service getAllParticipants");
        console.error(err);
        throw "Error participant service getAllParticipants";
    }
}

/**
 * Create Participant with provided data
 * 
 * @param  {string} internalId
 * @param  {string} externalId
 * @param  {number} genderId
 * @param  {number} raceId
 * @param  {Date} dateOfBirth
 * @param  {number} categoryId
 * @returns {Promise<Participant>} Participant created
 */
export async function createParticipant(internalId: string, externalId: string, genderId: number, raceId: number, dateOfBirth: Date, categoryId: number): Promise<Participant> {
    try {
        const result = await participantRepository.create({
            data: {
                internalId: internalId,
                externalId: externalId,
                genderId: genderId,
                raceId: raceId,
                dateOfBirth: dateOfBirth,
                categoryId: categoryId,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service createParticipant");
        console.error(err);
        throw "Error participant service createParticipant";
    }
}

/**
 * Update participant with provided id and data
 * 
 * @param  {number} id
 * @param  {string} internalId
 * @param  {string} externalId
 * @param  {number} genderId
 * @param  {number} raceId
 * @param  {Date} dateOfBirth
 * @param  {number} categoryId
 * @returns {Promise<Participant>} updated Participant
 */
export async function updateParticipant(id: number, internalId: string, externalId: string, genderId: number, raceId: number, dateOfBirth: Date, categoryId: number): Promise<Participant> {
    try {
        const result = await participantRepository.update({
            where: {
                id: id,
            },
            data: {
                internalId: internalId,
                externalId: externalId,
                genderId: genderId,
                raceId: raceId,
                dateOfBirth: dateOfBirth,
                categoryId: categoryId,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service updateParticipant");
        console.error(err);
        throw "Error participant service updateParticipant";
    }
}

/**
 * Delete Participant with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Participant>} deleted Participant
 */
export async function deleteParticipant(id: number): Promise<Participant> {
    try {
        const result = await participantRepository.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service deleteParticipant");
        console.error(err);
        throw "Error participant service deleteParticipant";
    }
}

/**
 * Get rows with participant and phenotype relationships
 * 
 * @param  {number} id
 * @returns {Promise<any>}
 */
export async function getParticipantPhenotypesTable(): Promise<any> {
    try {
        const result = await participantPhenotypeRelationshipRepository.findMany({
            select: {
                participant: true,
                probability: true,
                observed: true,
                phenotypeSource: {
                    select: {
                        name: true,
                        sourceType: true,
                    }
                },
                phenotype: {
                    select: {
                        name: true,
                        ontologyRelationship: {
                            select: {
                                phenotypeOntology: {
                                    select: {
                                        name: true,
                                        ontologyType: true,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        return result;
    } catch (err) {
        console.error("Error participant service getParticipantPhenotypesTable");
        console.error(err);
        throw "Error participant service getParticipantPhenotypeTable";
    }
}

/**
 * Get all Phenotype that the Participant has, each one with their own data included
 * 
 * TODO: an interface for the return type
 * @param  {number} id
 * @returns {Promise<any>}
 */
export async function getAllPhenotypesByParticipants(): Promise<any> {
    const res = await prisma.participant.findMany({
        select: {
            id: true,
            internalId: true,
            externalId: true,
            gender: true,
            race: true,
            dateOfBirth: true,
            category: true,
            participantPhenotypeRelationship: {
                select: {
                    id: true,
                    probability: true,
                    phenotype: {
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
                                            ontologyType: true,
                                        }
                                    }
                                }
                            }
                        }
                    },
                    phenotypeSource: {
                        select: {
                            id: true,
                            name: true,
                            sourceType: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                    observed: true,
                },
            },
        },
    });
    return res;
}

/**
 * Get all Biosamples by Participant and each one with all their attributes
 * 
 * TODO: an interface for the return type
 * @param  {number} id
 * @returns {Promise<any>}
 */
export async function getAllBiosamplesByParticipant(id: number): Promise<any> {
    const res = await prisma.participant.findMany({
        where: {
            id: id,
        },
        select: {
            id: true,
            internalId: true,
            externalId: true,
            gender: true,
            race: true,
            dateOfBirth: true,
            category: true,
            participantBiosample: {
                select: {
                    biosample: {
                        select: {
                            id: true,
                            biosampleId: true,
                            biosource: true,
                            location: true,
                            tubeType: true,
                            status: true,
                            study: true,
                            ngs: {
                                select: {
                                    observedMeanDepth: true,
                                    ngsType: true,
                                    batch: true,
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
//-        Gender        -
//------------------------

/**
 * Get Gender with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Gender>} Gender data
 * @returns {Promise<null>} not found
 */
export async function getGender(id: number): Promise<Gender | null> {
    try {
        const result = await genderRepository.findUnique({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service getGender");
        console.error(err);
        throw "Error participant service getGender";
    }
}

/**
 * Get Gender with provided name of the Gender
 * 
 * @param  {string} name
 * @returns {Promise<Gender>} Gender data
 * @returns {Promise<null>} not found
 */
export async function getGenderByName(name: string): Promise<Gender | null> {
    try {
        return await genderRepository.findUnique({
            where: {
                name: name,
            },
        })
    } catch (err) {
        console.error("Error participant service getGenderByName");
        console.error(err);
        throw "Error participant service getGenderByName";
    }
}

/**
 * Get all Genders data
 * 
 * @returns {Promise<Gender[]>} get all Genders
 */
export async function getAllGenders(): Promise<Gender[]> {
    try {
        const result = await genderRepository.findMany();
        return result;
    } catch (err) {
        console.error("Error participant service getAllGenders");
        console.error(err);
        throw "Error participant service getAllGenders";
    }
}

/**
 * Create gender with provided name
 * 
 * @param  {string} name
 * @returns {Promise<Gender>} Gender created
 */
export async function createGender(name: string): Promise<Gender> {
    try {
        const result = await genderRepository.create({
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service createGender");
        console.error(err);
        throw "Error participant service createGender";
    }
}

/**
 * Create multiple Gender
 * @param  {any[]} data list of gender name
 * @return {Promise<Gender[]>} number of new Gender created
 */
export async function createMultipleGender(data: any[]): Promise<{count: number}> {
    try {
        const result = await genderRepository.createMany({
            data: data
        })
        return result;
    } catch (err) {
        console.error("Error participant service createMultipleGender");
        console.error(err);
        throw "Error participant service createMultipleGender";
    }
}

/**
 * Update Gender with provided id and name
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<Gender>} updated Gender
 */
export async function updateGender(id: number, name: string): Promise<Gender> {
    try {
        const result = await genderRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service updateGender");
        console.error(err);
        throw "Error participant service updateGender";
    }
}

/**
 * Delete Gender with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Gender>} deleted Gender
 */
export async function deleteGender(id: number): Promise<Gender> {
    try {
        const result = await genderRepository.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service deleteGender");
        console.error(err);
        throw "Error participant service deleteGender";
    }
}

//------------------------
//-         Race         -
//------------------------

/**
 * Get Race with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Race>} Race data
 * @returns {Promise<null>} not found
 */
export async function getRace(id: number): Promise<Race | null> {
    try {
        const result = await raceRepository.findUnique({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service getRace");
        console.error(err);
        throw "Error participant service getRace";
    }
}

/**
 * Get Race with provided name
 * 
 * @param  {string} name
 * @returns {Promise<Race>} Race data
 * @returns {Promise<null>} not found
 */
export async function getRaceByName(name: string): Promise<Race | null> {
    try {
        return await raceRepository.findUnique({
            where: {
                name: name,
            },
        })
    } catch (err) {
        console.error("Error participant service getRaceByName");
        console.error(err);
        throw "Error participant service getRaceByName";
    }
}

/**
 * Get all Races
 * 
 * @returns {Promise<Race[]>} all Race data
 */
export async function getAllRaces(): Promise<Race[]> {
    try {
        const result = await raceRepository.findMany();
        return result;
    } catch (err) {
        console.error("Error participant service getAllRaces");
        console.error(err);
        throw "Error participant service getAllRaces";
    }
}

/**
 * Create Race with provided data
 * 
 * @param  {string} name
 * @returns {Promise<Race>} Race created
 */
export async function createRace(name: string): Promise<Race> {
    try {
        const result = await raceRepository.create({
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service createRace");
        console.error(err);
        throw "Error participant service createRace";
    }
}

/**
 * Create multiple Race
 * 
 * @param  {any[]} data list of Race name
 * @returns {Promise<Race[]>} number of new Race created
 */
export async function createMultipleRace(data: any[]): Promise<{count: number}> {
    try {
        const result = await raceRepository.createMany({
            data: data
        })
        return result;
    } catch (err) {
        console.error("Error participant service createMultipleRace");
        console.error(err);
        throw "Error participant service createMultipleRace";
    }
}

/**
 * Update Race with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<Race>} updated Race
 */
export async function updateRace(id: number, name: string): Promise<Race> {
    try {
        const result = await raceRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service updateRace");
        console.error(err);
        throw "Error participant service updateRace";
    }
}

/**
 * Delete Race with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Race>} deleted Race
 */
export async function deleteRace(id: number): Promise<Race> {
    try {
        const result = await raceRepository.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service deleteRace");
        console.error(err);
        throw "Error participant service deleteRace";
    }
}


//------------------------
//-       Category       -
//------------------------

/**
 * Get category with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Category>} Category data
 * @returns {Promise<null>} not found
 */
export async function getCategory(id: number): Promise<Category | null> {
    try {
        const result = await categoryRepository.findUnique({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service getCategory");
        console.error(err);
        throw "Error participant service getCategory";
    }
}

/**
 * Get Category with provided name
 * 
 * @param  {string} name
 * @returns {Promise<Category>} Category data
 * @returns {Promise<null>} not found
 */
export async function getCategoryByName(name: string): Promise<Category | null> {
    try {
        return await categoryRepository.findUnique({
            where: {
                name: name,
            },
        });
    } catch (err) {
        console.error("Error participant service getCategoryByName");
        console.error(err);
        throw "Error participant service getCategoryByName";
    }
}

/**
 * Get all Categories data
 * 
 * @returns {Promise<Category[]>} all Categories data
 */
export async function getAllCategories(): Promise<Category[]> {
    try {
        const result = await categoryRepository.findMany();
        return result;
    } catch (err) {
        console.error("Error participant service getCategories");
        console.error(err);
        throw "Error participant service getCategories";
    }
}

/**
 * Create Category with provided name
 * 
 * @param  {string} name
 * @returns {Promise<Category>} Category created
 */
export async function createCategory(name: string): Promise<Category> {
    try {
        const result = await categoryRepository.create({
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service createCategory");
        console.error(err);
        throw "Error participant service createCategory";
    }
}

/**
 * Create multiple Category
 * 
 * @param  {any[]} data list of Category name
 * @returns {Promise<number>} number of new Category created
 */
export async function createMultipleCategory(data: any[]) {
    try {
        const result = await categoryRepository.createMany({
            data: data
        })
        return result;
    } catch (err) {
        console.error("Error participant service createMultipleCategory");
        console.error(err);
        throw "Error participant service createMultipleCategory";
    }
}

/**
 * Update Category with provided id and name
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<Category>} updated Category
 */
export async function updateCategory(id: number, name: string): Promise<Category> {
    try {
        const result = await categoryRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service updateCategory");
        console.error(err);
        throw "Error participant service updateCategory";
    }
}

/**
 * Delete Cateogory with provided id
 * 
 * @param  {number} id
 * @returns {Promise<Category>} deleted Category
 */
export async function deleteCategory(id: number): Promise<Category> {
    try {
        const result = await categoryRepository.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service deleteCategory");
        console.error(err);
        throw "Error participant service deleteCategory";
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
 * Get FamilyRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<FamilyRelationship>} FamilyRelationship data
 * @returns {Promise<null>} not found
 */
export async function getFamilyRelationship(id: number): Promise<FamilyRelationship | null> {
    try {
        const result = await familyRelationshipRepository.findUnique({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service getFamilyRelationship");
        console.error(err);
        throw "Error participant service getFamilyRelationship";
    }
}

/**
 * Get all FamilyRelationship
 * 
 * @returns {Promise<FamilyRelationship[]>} all FamilyRelationship data
 */
export async function getAllFamilyRelationships(): Promise<FamilyRelationship[]> {
    try {
        const result = await familyRelationshipRepository.findMany();
        return result;
    } catch (err) {
        console.error("Error participant service getAllFamilyRelationships");
        console.error(err);
        throw "Error participant service getAllFamilyRelationships";
    }
}

/**
 * Create Family Relationship with provided data
 * 
 * @param  {number} participant1Id
 * @param  {number} participant2Id
 * @param  {number} relationshipTypeId
 * @returns {Promise<FamilyRelationship>} FamilyRelationship created
 */
export async function createFamilyRelationship(participant1Id: number, participant2Id: number, relationshipTypeId: number): Promise<FamilyRelationship> {
    try {
        const result = await familyRelationshipRepository.create({
            data: {
                participant1Id: participant1Id,
                participant2Id: participant2Id,
                familyRelationshipTypeId: relationshipTypeId,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service createFamilyRelationship");
        console.error(err);
        throw "Error participant service createFamilyRelationship";
    }
}

/**
 * Update FamilyRelationship with provided id and data
 * 
 * @param  {number} id
 * @param  {number} participant1Id
 * @param  {number} participant2Id
 * @param  {number} relationshipTypeId
 * @returns {Promise<FamilyRelationship>} updated FamilyRelationship
 */
export async function updateFamilyRelationship(id: number, participant1Id: number, participant2Id: number, relationshipTypeId: number): Promise<FamilyRelationship> {
    try {
        const result = await familyRelationshipRepository.update({
            where: {
                id: id,
            },
            data: {
                participant1Id: participant1Id,
                participant2Id: participant2Id,
                familyRelationshipTypeId: relationshipTypeId,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service updateFamilyRelationship");
        console.error(err);
        throw "Error participant service updateFamilyRelationship";
    }
}

/**
 * Delete FamilyRelationship with provided id
 * 
 * @param  {number} id
 * @returns {Promise<FamilyRelationship>} deleted FamilyRelationshiop
 */
export async function deleteFamilyRelationship(id: number): Promise<FamilyRelationship> {
    try {
        const result = await familyRelationshipRepository.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service deleteFamilyRelationship");
        console.error(err);
        throw "Error participant service deleteFamilyRelationship";
    }
}

//------------------------
//-  Relationship type   -
//------------------------

/**
 * Get RelationshipType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<FamilyRelationshipType>} FamilyRelationshipType data
 * @returns {Promise<null>} not found
 */
export async function getRelationshipType(id: number): Promise<FamilyRelationshipType | null> {
    try {
        const result = await familyRelationshipTypeRepository.findUnique({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service getRelationshipType");
        console.error(err);
        throw "Error participant service getRelationshipType";
    }
}

/**
 * Get all FamilyRelationshipType
 * 
 * @returns {Promise<FamilyRelationshipType[]>} all FamilyRelationshipType data
 */
export async function getAllRelationshipTypes(): Promise<FamilyRelationshipType[]> {
    try {
        const result = await familyRelationshipTypeRepository.findMany();
        return result;
    } catch (err) {
        console.error("Error participant service getAllRelationshipTypes");
        console.error(err);
        throw "Error participant service getAllRelationshipTypes";
    }
}

/**
 * Create FamilyRelationshipType with provided name
 * 
 * @param  {string} name
 * @returns {Promise<FamilyRelationshipType>} FamilyRelationshipType created
 */
export async function createRelationshipType(name: string): Promise<FamilyRelationshipType> {
    try {
        const result = await familyRelationshipTypeRepository.create({
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service createRelationshipType");
        console.error(err);
        throw "Error participant service createRelationshipType";
    }
}

/**
 * Update FamilyRelationshipType with provided id and data
 * 
 * @param  {number} id
 * @param  {string} name
 * @returns {Promise<FamilyRelationshipType>} updated FamilyRelationshipType
 */
export async function updateRelationshipType(id: number, name: string): Promise<FamilyRelationshipType> {
    try {
        const result = await familyRelationshipTypeRepository.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service updateRelationshipType");
        console.error(err);
        throw "Error participant service updateRelationshipType";
    }
}

/**
 * Delete FamilyRelationshipType with provided id
 * 
 * @param  {number} id
 * @returns {Promise<FamilyRelationshipType>} deleted FamilyRelationshipType
 */
export async function deleteRelationshipType(id: number): Promise<FamilyRelationshipType> {
    try {
        const result = await familyRelationshipTypeRepository.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error("Error participant service deleteRelationshipType");
        console.error(err);
        throw "Error participant service deleteRelationshipType";
    }
}
