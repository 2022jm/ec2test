---------------------------------
-----     PARTICIPANT     -------
---------------------------------

--
-- Gender table
--

DROP TABLE IF EXISTS "gender" CASCADE;
CREATE TABLE "gender" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Race table
--

DROP TABLE IF EXISTS "race" CASCADE;
CREATE TABLE "race" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Category table
--

DROP TABLE IF EXISTS "category" CASCADE;
CREATE TABLE  "category" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Participant table
--

DROP TABLE IF EXISTS "participant" CASCADE;
CREATE TABLE  "participant" (
	"id" SERIAL NOT NULL,
	"internal_id" VARCHAR NOT NULL,
	"external_id" VARCHAR NOT NULL,
	"gender_id" INT NOT NULL,
    "race_id" INT,
	"date_of_birth" DATE,
	"category_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "gender_id_fk" FOREIGN KEY ("gender_id") REFERENCES "gender"("id") ON DELETE CASCADE,
	CONSTRAINT "race_id_fk" FOREIGN KEY ("race_id") REFERENCES "race"("id") ON DELETE CASCADE,
	CONSTRAINT "category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE,

	UNIQUE ("internal_id")
);


---------------------------------
-----        FAMILY       -------
---------------------------------

--
-- Family relationship type table
--

DROP TABLE IF EXISTS "family_relationship_type" CASCADE;
CREATE TABLE  "family_relationship_type" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Family relationship table
--

DROP TABLE IF EXISTS "family_relationship" CASCADE;
CREATE TABLE  "family_relationship" (
	"id" SERIAL NOT NULL,
	"participant_1_id" INT NOT NULL,
	"participant_2_id" INT NOT NULL,
	"family_relationship_type_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "participant_1_id_fk" FOREIGN KEY ("participant_1_id") REFERENCES "participant"("id") ON DELETE CASCADE,
	CONSTRAINT "participant_2_id_fk" FOREIGN KEY ("participant_2_id") REFERENCES "participant"("id") ON DELETE CASCADE,
	CONSTRAINT "family_relationship_type_id_fk" FOREIGN KEY ("family_relationship_type_id") REFERENCES "family_relationship_type"("id") ON DELETE CASCADE,
    UNIQUE ("participant_1_id", "participant_2_id")
);


---------------------------------
-----      Phenotype      -------
---------------------------------

--
-- Phenotype table
--

DROP TABLE IF EXISTS "phenotype" CASCADE;
CREATE TABLE  "phenotype" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Phenotype type table
--

DROP TABLE IF EXISTS "phenotype_type" CASCADE;
CREATE TABLE  "phenotype_type" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE("name")
);

--
-- Phenotype phenotype relationship table
--

DROP TABLE IF EXISTS "phenotype_phenotype_relationship" CASCADE;
CREATE TABLE  "phenotype_phenotype_relationship" (
	"id" SERIAL NOT NULL,
	"phenotype_1_id" INT NOT NULL,
	"phenotype_2_id" INT NOT NULL,
	"phenotype_type_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "phenotype_1_id_fk" FOREIGN KEY ("phenotype_1_id") REFERENCES "phenotype"("id") ON DELETE CASCADE,
	CONSTRAINT "phenotype_2_id_fk" FOREIGN KEY ("phenotype_2_id") REFERENCES "phenotype"("id") ON DELETE CASCADE,
	CONSTRAINT "phenotype_type_id_fk" FOREIGN KEY ("phenotype_type_id") REFERENCES "phenotype_type"("id") ON DELETE CASCADE,
    UNIQUE ("phenotype_1_id", "phenotype_2_id")
);

--
-- Onthology type table
--

DROP TABLE IF EXISTS "ontology_type" CASCADE;
CREATE TABLE  "ontology_type" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
	UNIQUE ("name")
);

--
-- Phenotype ontology table
--

DROP TABLE IF EXISTS "phenotype_ontology" CASCADE;
CREATE TABLE  "phenotype_ontology" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
	"ontology_type_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "ontology_type_id_fk" FOREIGN KEY ("ontology_type_id") REFERENCES "ontology_type"("id") ON DELETE CASCADE,
	UNIQUE ("name", "ontology_type_id")
);

--
-- Onthology relationship table
--

DROP TABLE IF EXISTS "ontology_relationship" CASCADE;
CREATE TABLE  "ontology_relationship" (
	"id" SERIAL NOT NULL,
	"phenotype_id" INT NOT NULL,
	"phenotype_ontology_id" INT NOT NULL,
    PRIMARY KEY ("id"),
	CONSTRAINT "phenotype_id_fk" FOREIGN KEY ("phenotype_id") REFERENCES "phenotype"("id") ON DELETE CASCADE,
    CONSTRAINT "phenotype_ontology_id_fk" FOREIGN KEY ("phenotype_ontology_id") REFERENCES "phenotype_ontology"("id") ON DELETE CASCADE
);


--
-- Source type table
--

DROP TABLE IF EXISTS "source_type" CASCADE;
CREATE TABLE  "source_type" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Phenotype source table
--

DROP TABLE IF EXISTS "phenotype_source" CASCADE;
CREATE TABLE  "phenotype_source" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
	"source_type_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "source_type_id_fk" FOREIGN KEY ("source_type_id") REFERENCES "source_type"("id") ON DELETE CASCADE,
    UNIQUE ("name")
);

--
-- Observed table
--

DROP TABLE IF EXISTS "observed" CASCADE;
CREATE TABLE  "observed" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);


--
-- Participant phenotype relationship table
--

DROP TABLE IF EXISTS "participant_phenotype_relationship" CASCADE;
CREATE TABLE "participant_phenotype_relationship" (
	"id" SERIAL NOT NULL,
	"participant_id" INT NOT NULL,
	"phenotype_id" INT NOT NULL,
	"phenotype_source_id" INT NOT NULL,
	"probability" FLOAT(2) NOT NULL CHECK ("probability" between 0.00 and 1.00),
	"observed_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "participant_id_fk" FOREIGN KEY ("participant_id") REFERENCES "participant"("id") ON DELETE CASCADE,
	CONSTRAINT "phenotype_id_fk" FOREIGN KEY ("phenotype_id") REFERENCES "phenotype"("id") ON DELETE CASCADE,
	CONSTRAINT "phenotype_source_id_fk" FOREIGN KEY ("phenotype_source_id") REFERENCES "phenotype_source"("id") ON DELETE CASCADE,
	CONSTRAINT "observed_id_fk" FOREIGN KEY ("observed_id") REFERENCES "observed"("id") ON DELETE CASCADE
);

---------------------------------
-----      BIOSAMPLES     -------
---------------------------------

--
-- Biosource table
--

DROP TABLE IF EXISTS "biosource" CASCADE;
CREATE TABLE "biosource" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Temperature table
--

DROP TABLE IF EXISTS "temperature" CASCADE;
CREATE TABLE "temperature" (
	"id" SERIAL NOT NULL,
	"number" INT NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("number")
);

--
-- Tube type table
--

DROP TABLE IF EXISTS "tube_type" CASCADE;
CREATE TABLE "tube_type" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Status table
--

DROP TABLE IF EXISTS "status" CASCADE;
CREATE TABLE "status" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Study table
--

DROP TABLE IF EXISTS "study" CASCADE;
CREATE TABLE "study" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
-- Biosample table
--

DROP TABLE IF EXISTS "biosample" CASCADE;
CREATE TABLE "biosample" (
	"id" SERIAL NOT NULL,
	"biosample_id" VARCHAR(255) NOT NULL,
	"collaborator" VARCHAR,
	"biosource_id" INT NOT NULL,
    "location" VARCHAR,
	"temperature_id" INT,
    "tube_type_id" INT,
    "study_id" INT,
	"draw_time" TIME,
	"processing_start_time" TIME,
	"freezing_time" TIME,
	"process_by" VARCHAR,
	"notes" VARCHAR,
    "status_id" INT NOT NULL,
	"status_date" DATE NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "biosource_id_fk" FOREIGN KEY ("biosource_id") REFERENCES "biosource"("id") ON DELETE CASCADE,
	CONSTRAINT "status_id_fk" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE CASCADE,
	CONSTRAINT "study_id_fk" FOREIGN KEY ("study_id") REFERENCES "study"("id") ON DELETE CASCADE,
	CONSTRAINT "temperature_id_fk" FOREIGN KEY ("temperature_id") REFERENCES "temperature"("id") ON DELETE CASCADE,

	UNIQUE ("biosample_id")
);

--
-- Participant biosample table
--

DROP TABLE IF EXISTS "participant_biosample" CASCADE;
CREATE TABLE "participant_biosample" (
	"id" SERIAL NOT NULL,
	"participant_id" INT NOT NULL,
    "biosample_id" INT NOT NULL UNIQUE,
	"date_of_sampling" DATE NOT NULL,

    PRIMARY KEY ("id"),
    CONSTRAINT "participant_id_fk" FOREIGN KEY ("participant_id") REFERENCES "participant"("id") ON DELETE CASCADE,
    CONSTRAINT "biosample_id_fk" FOREIGN KEY ("biosample_id") REFERENCES "biosample"("id") ON DELETE CASCADE,

	UNIQUE ("participant_id", "biosample_id")
);


---------------------------------
-----      PREPROCESS     -------
---------------------------------

--
--  Center table
--

DROP TABLE IF EXISTS "center" CASCADE;
CREATE TABLE "center" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
--  Library prepare kit table
--

DROP TABLE IF EXISTS "library_prep_kit" CASCADE;
CREATE TABLE "library_prep_kit" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
    "chem_ver" VARCHAR,
    "insert_size" INT,

    PRIMARY KEY ("id")
);

--
--  Platform table
--

DROP TABLE IF EXISTS "platform" CASCADE;
CREATE TABLE "platform" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
    "chem_ver" VARCHAR,
    "insert_size" INT,

    PRIMARY KEY ("id")
);

--
--  Software table
--

DROP TABLE IF EXISTS "software" CASCADE;
CREATE TABLE "software" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
--  NGS type table
--

DROP TABLE IF EXISTS "ngs_type" CASCADE;
CREATE TABLE "ngs_type" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
--  Preprocess table
--

DROP TABLE IF EXISTS "preprocess" CASCADE;
CREATE TABLE "preprocess" (
	"id" SERIAL NOT NULL,
	"center_id" INT,
    "ngs_type_id" INT,
    "library_prep_kit_id" INT,
    "platform_id" INT,
    "software_id" INT,

    PRIMARY KEY ("id"),
	CONSTRAINT "center_id_fk" FOREIGN KEY ("center_id") REFERENCES "center"("id") ON DELETE CASCADE,
	CONSTRAINT "ngs_type_id_fk" FOREIGN KEY ("ngs_type_id") REFERENCES "ngs_type"("id") ON DELETE CASCADE,
	CONSTRAINT "library_prep_kit_id_fk" FOREIGN KEY ("library_prep_kit_id") REFERENCES library_prep_kit(id) ON DELETE CASCADE,
	CONSTRAINT "platform_id_fk" FOREIGN KEY ("platform_id") REFERENCES "platform"("id") ON DELETE CASCADE,
	CONSTRAINT "software_id_fk" FOREIGN KEY ("software_id") REFERENCES "software"("id") ON DELETE CASCADE
);


---------------------------------
-----         BATCH       -------
---------------------------------

--
--  Bioinformatic pipeline table
--

DROP TABLE IF EXISTS "bioinformatic_pipeline" CASCADE;
CREATE TABLE "bioinformatic_pipeline" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,

    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

--
--  Batch table
--

DROP TABLE IF EXISTS "batch" CASCADE;
CREATE TABLE "batch" (
	"id" SERIAL NOT NULL,
	"batch_id" VARCHAR NOT NULL,
    "delivery_date" DATE,
    "study_id" INT,
    "preprocess_id" INT,
    "bioinformatic_pipeline_id" INT,

    PRIMARY KEY ("id"),
	CONSTRAINT "study_id_fk" FOREIGN KEY ("study_id") REFERENCES "study"("id") ON DELETE CASCADE,
	CONSTRAINT "preprocess_id_fk" FOREIGN KEY ("preprocess_id") REFERENCES "preprocess"("id") ON DELETE CASCADE,
	CONSTRAINT "bioinformatic_pipeline_id_fk" FOREIGN KEY ("bioinformatic_pipeline_id") REFERENCES "bioinformatic_pipeline"("id") ON DELETE CASCADE
);

---------------------------------
-----          NGS        -------
---------------------------------

--
--  NGS table
--

DROP TABLE IF EXISTS "ngs" CASCADE;
CREATE TABLE "ngs" (
	"id" SERIAL NOT NULL,
    "observed_mean_depth" VARCHAR NOT NULL,
    "ngs_type_id" INT NOT NULL,
    "biosample_id" INT NOT NULL,
    "batch_id" INT NOT NULL,

    PRIMARY KEY ("id"),
	CONSTRAINT "ngs_type_id_fk" FOREIGN KEY ("ngs_type_id") REFERENCES "ngs_type"("id") ON DELETE CASCADE,
	CONSTRAINT "biosample_id_fk" FOREIGN KEY ("biosample_id") REFERENCES "biosample"("id") ON DELETE CASCADE,
	CONSTRAINT "batch_id_fk" FOREIGN KEY ("batch_id") REFERENCES "batch"("id") ON DELETE CASCADE
);

--
--  Spike (rna) table
--

DROP TABLE IF EXISTS "spike" CASCADE;
CREATE TABLE "spike" (
	"id" SERIAL NOT NULL,
    "ngs_id" INT NOT NULL,
    "spike_dilution" VARCHAR,
    "spike_mix" VARCHAR,

	CONSTRAINT "spike_ngs_id_fk" FOREIGN KEY ("ngs_id") REFERENCES "ngs"("id") ON DELETE CASCADE,
    PRIMARY KEY ("id")
);

--
--  Genome reference (dna) table
--

DROP TABLE IF EXISTS "genome_reference" CASCADE;
CREATE TABLE "genome_reference" (
	"id" SERIAL NOT NULL,
    "ngs_id" INT NOT NULL,
    "genome_reference" VARCHAR NOT NULL,

	CONSTRAINT "genome_reference_ngs_id_fk" FOREIGN KEY ("ngs_id") REFERENCES "ngs"("id") ON DELETE CASCADE,
    PRIMARY KEY ("id")
);


-- ---------------------------------
-- -----    QUESTIONNAIRES   -------
-- ---------------------------------

-- DROP TABLE IF EXISTS "question" CASCADE;
-- CREATE TABLE "question" (
-- 	"id" SERIAL NOT NULL,
--     "value" VARCHAR NOT NULL,
--     PRIMARY KEY ("id"),
-- 	UNIQUE ("value")
-- );

-- DROP TABLE IF EXISTS "answer" CASCADE;
-- CREATE TABLE "answer" (
-- 	"id" SERIAL NOT NULL,
--     "value" VARCHAR NOT NULL,
--     PRIMARY KEY ("id"),
-- 	UNIQUE ("value")
-- );

-- DROP TABLE IF EXISTS "question_source" CASCADE;
-- CREATE TABLE "questionnaire_source" (
-- 	"id" SERIAL NOT NULL,
--     "name" VARCHAR NOT NULL,
--     PRIMARY KEY ("id"),
-- 	UNIQUE ("name")
-- );

-- DROP TABLE IF EXISTS "questionnaire" CASCADE;
-- CREATE TABLE "genome_reference" (
-- 	"id" SERIAL NOT NULL,
--     "participant_id" INT NOT NULL,
--     "question_id" INT NOT NULL,
-- 	"answer_id" INT NOT NULL,
-- 	"question_source" INT NOT NULL,
--     PRIMARY KEY ("id")
-- );
