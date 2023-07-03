---------------------------------
-----     PARTICIPANT     -------
---------------------------------

INSERT INTO "gender" ("name") VALUES ('Female'), ('Male');

INSERT INTO "race" ("name") VALUES ('White');

INSERT INTO "category" ("name") VALUES ('Enrolled'), ('Not enrolled');

INSERT INTO "participant" ("internal_id", "external_id", "gender_id", "race_id", "date_of_birth", "category_id") VALUES 
    ('S001-001', 'SJD201900127', 1, 1, '2014-02-03', 1), 
    ('S001-002', 'SJD201900011', 1, 1, '1986-03-01', 2), 
    ('S001-003', 'PCK203849', 2, 1, '1980-06-30', 2), 
    ('S001-004', 'SDJ201900180', 1, 1, '1989-01-21', 2), 
    ('S002-001', '48AS845GJ19GDH15', 2, 1, '2011-12-13', 1), 
    ('S002-002', 'PCK203849802', 2, 1, '1983-01-30', 1), 
    ('S002-003', 'DJV2852N18', 2, 1, '2020-12-18', 1), 
    ('S002-005', 'DJV2852N19', 2, 1, '2016-05-21', 1), 
    ('S002-008', 'DJV2852N20', 2, 1, '2004-12-12', 1),
    ('S002-009', '28FJAN2', 2, 1, '2009-03-19', 1);

---------------------------------
-----        FAMILY       -------
---------------------------------

INSERT INTO "family_relationship_type" ("name") VALUES ('father'), ('mother'), ('maternal_uncle');

INSERT INTO "family_relationship" ("participant_1_id", "participant_2_id", "family_relationship_type_id") VALUES (2, 1, 1), (3, 1, 2), (4, 5, 3);

---------------------------------
-----      Phenotype      -------
---------------------------------

INSERT INTO "phenotype" ("name") VALUES ('Blue eyes'), ('Control'), ('ASD'), ('Macrocephaly');

INSERT INTO "phenotype_type" ("name") VALUES ('belongs to');

INSERT INTO "phenotype_phenotype_relationship" ("phenotype_1_id","phenotype_2_id", "phenotype_type_id") VALUES (3, 4, 1), (2, 1, 1), (1, 2, 1), (2, 2, 1), (3, 1, 1);

INSERT INTO "ontology_type" ("name") VALUES ('UMLS'), ('HPO');

INSERT INTO "phenotype_ontology" ("name", "ontology_type_id") VALUES ('HQ89D', 1), ('SF1KD', 2), ('DH12X', 2), ('AZZNE2', 1);

INSERT INTO "ontology_relationship" ("phenotype_id", "phenotype_ontology_id") VALUES (1, 1), (1, 2), (3, 3);

INSERT INTO "source_type" ("name") VALUES ('Electronical Records'), ('Questionnaire');

INSERT INTO "phenotype_source" ("name", "source_type_id") VALUES ('electronical 8DBH', 1), ('questionnaire A1J4', 2), ('questionnaire HN16', 2);

INSERT INTO "observed" ("name") VALUES ('Yes'), ('No'), ('Missing');

INSERT INTO "participant_phenotype_relationship" ("participant_id", "phenotype_id", "phenotype_source_id", "probability", "observed_id") VALUES (1, 1, 1, 0.3, 1), (1, 2, 2, 1.0, 1), (2, 4, 2, 0.6, 2), (5, 4, 3, 0.8, 3), (3, 4, 3, 0.2, 3);

---------------------------------
-----      BIOSAMPLES     -------
---------------------------------

INSERT INTO "biosource" ("name") VALUES ('Whole blood');

INSERT INTO "temperature" ("number") VALUES (-20), (-80);

INSERT INTO "tube_type" ("name") VALUES ('Red'), ('Orange');

INSERT INTO "status" ("name") VALUES ('Not sequenced'), ('In preparation'), ('Delivered'), ('Failed qc');

INSERT INTO "study" ("name") VALUES ('Pilot Porject'), ('CCHMC');

INSERT INTO "biosample" ("biosample_id", "biosource_id", "collaborator", "location", "temperature_id", "tube_type_id", "status_id", "study_id", "draw_time", "processing_start_time", "freezing_time", "process_by", "status_date") VALUES 
('2EG-', 1, 'Hospital la vila', 'F01-01', 1, 1, 1, 1, '12:20', '12:24', '12:40', 'AB', '2020-05-25'), 
('BA1B3', 1, 'Hospital la mar', 'G03-20', 1, 2, 1, 1, '13:24', '13:28', '13:40', 'AC', '2022-05-17'), 
('BA-E', 1, 'Hospital la mar', 'F01-01', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('KD82F', 1, 'Hospital la mar', 'F01-01', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('AK1', 1, 'Hospital clinic de Barcelona', 'F01-02', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('BPKD', 1, 'Hospital clinic de Barcelona', 'F01-02', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('JAT', 1, 'Hospital Municipal de Badalona', 'F01-02', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('27NSG', 1, 'Hospital Universitario Bellvitge', 'F01-04', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('DG18', 1, 'Hospital Universitario Bellvitge', 'F01-03', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('MVBI', 1, 'Hospital la mar', 'F02-01', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('8NVI', 1, 'Hospital Universitario Bellvitge', 'F02-02', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('SBQKF', 1, 'Hospital la mar', 'F03-11', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('27Y5JG', 1, 'Hospital Universitario Bellvitge', 'F01-10', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('FN28V', 1, 'Hospital Municipal de Badalona', 'F01-10', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23'),
('VKW2', 1, 'Hospital Municipal de Badalona', 'F01-11', 1, 1, 2, 2, '16:03', '16:20', '16:29', 'AD', '2021-11-23');

INSERT INTO "participant_biosample" ("participant_id", "biosample_id", "date_of_sampling") VALUES (1, 1, '2018-08-23'), (1, 2, '2022-09-19'), (5, 3, '2020-04-19'), (2, 4, '2018-02-13'), (3, 5, '2014-06-11'), (4, 6, '2002-05-02'), (6, 7, '2018-10-07'), (7, 8, '2009-02-06'), (8, 9, '2011-11-04'), (9, 10, '2005-08-16');

---------------------------------
-----      PREPROCESS     -------
---------------------------------

INSERT INTO "center" ("name") VALUES ('Genwiz'), ('Omega');

INSERT INTO "library_prep_kit" ("name") VALUES ('NEBNext Ultra II Directional RNA Library Prep Kit'), ('NEBNext® UltraTM II DNA Library Preparation');

INSERT INTO "platform" ("name") VALUES ('Illumina NovaSeq 6000');

INSERT INTO "software" ("name") VALUES ('Ilumina Analytic');

INSERT INTO "ngs_type" ("name") VALUES ('RNA'),  ('DNA');

INSERT INTO "preprocess" ("center_id", "ngs_type_id", "library_prep_kit_id", "platform_id", "software_id") VALUES (1, 1, 1, 1, 1), (2, 2, 2, 1, 1);

---------------------------------
-----         BATCH       -------
---------------------------------

INSERT INTO "bioinformatic_pipeline" ("name") VALUES ('V1.0'), ('V2.0');

INSERT INTO "batch" ("batch_id", "delivery_date", "study_id", "preprocess_id", "bioinformatic_pipeline_id") VALUES ('90-282778361', '2019-10-18', 1, 1, 1), ('90-163926367', '2018-11-01', 2, 2, 2), ('12-163913367', '2002-01-01', 2, 2, 2), ('18-18238791', '2022-10-30', 2, 2, 2), ('946-123451234', '2009-08-15', 2, 2, 2);

---------------------------------
-----          NGS        -------
---------------------------------

INSERT INTO "ngs" ("observed_mean_depth", "ngs_type_id", "biosample_id", "batch_id") VALUES ('29M', 2, 1, 1), ('37M', 2, 1, 1), ('53M', 2, 4, 2), ('80M', 2, 5, 3), ('17M', 1, 6, 4), ('53M', 2, 7, 2), ('21M', 1, 8, 5), ('69M', 1, 9, 5), ('58M', 1, 10, 5), ('13M', 1, 3, 4);

INSERT INTO "spike" ("ngs_id", "spike_dilution", "spike_mix") VALUES (1, '1:1000', '1'), (2, '1:1000', 2), (3, '1:1000', 3), (4, '1:1000', 2), (6, '1:1000', 2);

INSERT INTO "genome_reference" ("ngs_id", "genome_reference") VALUES (5, 'GRCh38'), (7, 'FKsS7'), (8, 'SDBN1'), (9, 'AH82S'), (10, 'WJAC8');

-- ---------------------------------
-- -----    QUESTIONNAIRES   -------
-- ---------------------------------

-- INSERT INTO "question" ("value") VALUES ('Do you have blue eyes?'), ('Do you have macrocephaly?'), ('Observations');

-- INSERT INTO "answer" ("value") VALUES ('Yes'), ('No'), ('I have diabetes and my heart is on the left side');

-- INSERT INTO "question_source" ("name") VALUES ('Medical'), ('Patient');

-- INSERT INTO "questionnaire" ("participant_id", "question_id", "answer_id", "question_source")