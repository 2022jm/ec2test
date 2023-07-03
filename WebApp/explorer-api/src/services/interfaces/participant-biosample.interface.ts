interface participantBiosampleCsvRawRow {
    "ParticipantInternalID": string,
    "ParticipantExternalID": string,
    "BiosampleID": string,
    "Study": string,
    "Collaborator": string,
    "Race": string,
    "Gender": string,
    "DateOfBirth": string,
    "DateOfSampling": string,
    "Diagnosis": string,
    "Relationship": string, //TODO: discuss
    "TubeType": string,
    "Biosource": string,
    "DrawTime": string,
    "ProcessingStartTime": string,
    "FreezingTime": string,
    "ProcessedBy": string,
    "Location": string,
    "StorageTemperature": string,
    "Notes": string,
    "Status": string,
    "StatusDate": string,
}

interface participantBiosampleCheck {
    allFound: boolean,
    values: {
        [key: string]: any[]
    }
}