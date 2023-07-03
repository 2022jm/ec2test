import { Prisma } from "@prisma/client";
import * as participantService from "../services/participant.service";
/**
 * Parse participant information into ids
 * 
 * @param  {participantBiosampleCsvRawRow[]} data 
 * @returns {Promise<Prisma.ParticipantBiosampleCreateManyInput[]>}
 */

export async function parseParticipant(data: participantBiosampleCsvRawRow[]): Promise<Prisma.ParticipantCreateManyInput[]> {
    let participantData: Prisma.ParticipantCreateManyInput[] = [];
    
    for (let i = 0; i < data.length; i++) {
        const row = data[i];

        let race = await participantService.getRaceByName(row.Race);
        let gender = await participantService.getGenderByName(row.Gender);
        let dateOfBirth = new Date(row.DateOfBirth);
        let category = await participantService.getCategoryByName(row.Relationship);
        
        console.log(row);
        participantData.push({
            internalId: row.ParticipantInternalID,
            externalId: row.ParticipantExternalID,
            raceId: race!.id,
            genderId: gender!.id,
            dateOfBirth: dateOfBirth,
            categoryId: category!.id,
        })
    }
    
    return participantData;
}