import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BiosampleTableService } from '../../services/biosample-table/biosample-table.service';
import { ParticipantTableService } from '../../services/participant-table/participant-table.service';
import { ColDef } from 'ag-grid-community';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { PhenotypeTableService } from '../../services/phenotype-table/phenotype-table.service';
import { PhenotypeRelationshipTableService } from '../../services/phenotype-relationship-table/phenotype-relationship-table.service';
import { NgsRnaTableService } from '../../services/ngs-rna-table/ngs-rna-table.service';
import { NgsDnaTableService } from '../../services/ngs-dna-table/ngs-dna-table.service';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css']
})
export class TableWrapperComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() exportTableAsCsv$: Observable<any>;

  title: string;

  data$: Observable<any>;
  colDef$: Observable<ColDef[]>;
  exportCsv$: Subject<any> = new Subject<void>();
  visibleColumns$: BehaviorSubject<any>;
  visibleColumnsAfterUpdate$: BehaviorSubject<any>;
  exportTablesAsCsvSubscription: Subscription;
  

  checkboxOptions = {
    checkboxSelection: this.checkboxSelection,
    headerCheckboxSelection: this.headerCheckboxSelection,
    resizable: false,
    width: 50,
  }

  typesOfTables = {
    "participants": {
      title: "Participant",
      observable$: this.participantTableService.participants$,
      visibleColumns: [
        {
          name: "P.STALICLA ID",
          visible: true,
        }, {
          name: "External ID",
          visible: true,
        }, {
          name: "Gender",
          visible: true,
        }, {
          name: "Race",
          visible: true,
        }, {
          name: "Age",
          visible: true,
        }, {
          name: "DOB",
          visible: true,
        }, {
          name: "Category",
          visible: true,
        }
      ],
      // visibleColumns: [
      //   "P.STALICLA ID", "External ID", "Gender", "Race", "Age", "DOB", "Category"
      // ],
      colDef: [
        this.checkboxOptions,
        { field: "internalId", headerName: "P.STALICLA ID" },
        { field: "externalId", headerName: "External ID" },
        { field: "gender.name", headerName: "Gender" },
        { field: "race.name", headerName: "Race" },
        { field: "age", headerName: "Age" },
        { field: "dateOfBirth", headerName: "DOB", valueFormatter: this.dateFormatter },
        { field: "category.name", headerName: "Category" }
      ]
    },
    "biosamples": {
      title: "Biosample",
      observable$: this.biosampleTableService.biosamples$,
      visibleColumns: [
        {
          name: "P.STALICLA ID",
          visible: true,
        }, {
          name: "Project name",
          visible: true,
        }, {
          name: "Biosample",
          visible: true,
        }, {
          name: "Bio source",
          visible: true,
        }, {
          name: "Location",
          visible: true,
        }, {
          name: "Temperature",
          visible: true,
        }, {
          name: "Tube Type",
          visible: true,
        }, {
          name: "Status",
          visible: true,
        }, {
          name: "Date of sampling",
          visible: true,
        }, {
          name: "Age at blood draw",
          visible: true,
        }, {
          name: "Draw Time",
          visible: true,
        }, {
          name: "Total Processing Time",
          visible: true,
        }
      ],
      colDef: [
        this.checkboxOptions,
        { field: "participant.internalId", headerName: "P.STALICLA ID" },
        { field: "biosample.study.name", headerName: "Project name" },
        { field: "biosample.biosampleId", headerName: "Biosample" },
        { field: "biosample.biosource.name", headerName: "Bio source" },
        { field: "biosample.location", headerName: "Location" },
        { field: "biosample.temperature.number", headerName: "Temperature" },
        { field: "biosample.tubeType.name", headerName: "Tube Type" },
        { field: "biosample.status.name", headerName: "Status" },
        { field: "dateOfSampling", headerName: "Date of sampling", valueFormatter: this.dateFormatter },
        { field: "biosample.ageAtBloodDrawInMs", headerName: "Age at blood draw", valueFormatter: this.POSIXToYears },
        { field: "biosample.drawAndProcessTimeInMs", headerName: "Draw Time", valueFormatter: this.POSIXToHours},
        { field: "biosample.totalProcessingTimeInMs", headerName: "Total Processing Time", valueFormatter: this.POSIXToHours },
      ]
    },
    "phenotypes": {
      title: "Phenotypes",
      observable$: this.phenotypeTableService.phenotypes$,
      visibleColumns: [
        {
          name: "P.STALICLA ID",
          visible: true,
        }, {
          name: "Phenotype Name",
          visible: true,
        }, {
          name: "HPO",
          visible: true,
        }, {
          name: "UMLS",
          visible: true,
        }, {
          name: "Source",
          visible: true,
        }, {
          name: "Probability",
          visible: true,
        }, {
          name: "Observed",
          visible: true,
        }
      ],
      colDef: [
        this.checkboxOptions,
        { field: "participant.internalId", headerName: "P.STALICLA ID" },
        { field: "phenotype.name", headerName: "Phenotype Name" },
        { headerName: "HPO", valueGetter: this.hpoColumn },
        { headerName: "UMLS", valueGetter: this.umlsColumn },
        { field: "phenotypeSource.name", headerName: "Source" },
        { field: "probability", headerName: "Probability" },
        { field: "observed.name", headerName: "Observed" },
      ]
    },
    "phenotypes-relationship": {
      title: "Phen relationship",
      observable$: this.phenotypeRelationshipTableService.phenotypesRelationship$,
      visibleColumns: [
        {
          name: "Phenotype 1",
          visible: true,
        }, {
          name: "Phenotype 2",
          visible: true,
        }
      ],
      colDef: [
        this.checkboxOptions,
        { field: "phenotypePhenotypeRelationship1.name", headerName: "Phenotype 1" },
        { field: "phenotypePhenotypeRelationship2.name", headerName: "Phenotype 2" },
      ]
    },
    "ngs-rna": {
      title: "NGS - RNA",
      observable$: this.ngsRnaTableService.ngsRna$,
      visibleColumns: [
        {
          name: "Biosample ID",
          visible: true,
        }, {
          name: "Batch ID",
          visible: true,
        }, {
          name: "Spike Dilution",
          visible: true,
        }, {
          name: "Spike Mix",
          visible: true,
        }, {
          name: "Observed mean depth",
          visible: true,
        }
      ],
      colDef: [
        this.checkboxOptions,
        { field: "ngs.biosample.biosampleId", headerName: "Biosample ID"},
        { field: "ngs.batch.batchId", headerName: "Batch ID"},
        { field: "spikeDilution", headerName: "Spike Dilution"},
        { field: "spikeMix", headerName: "Spike Mix"},
        { field: "ngs.observedMeanDepth", headerName: "Observed mean depth"},
      ]
    },
    "ngs-dna": {
      title: "NGS - DNA",
      observable$: this.ngsDnaTableService.ngsDna$,
      visibleColumns: [
        {
          name: "Biosample ID",
          visible: true,
        }, {
          name: "Batch ID",
          visible: true,
        }, {
          name: "Observed mean depth",
          visible: true,
        }, {
          name: "Genome referece",
          visible: true,
        }
      ],
      colDef: [
        this.checkboxOptions,
        { field: "ngs.biosample.biosampleId", headerName: "Biosample ID"},
        { field: "ngs.batch.batchId", headerName: "Batch ID"},
        { field: "ngs.observedMeanDepth", headerName: "Observed mean depth"},
        { field: "genomeReference", headerName: "Genome reference"},
      ]
    }
  }

  constructor(
    public biosampleTableService: BiosampleTableService,
    public participantTableService: ParticipantTableService,
    public phenotypeTableService: PhenotypeTableService,
    public phenotypeRelationshipTableService: PhenotypeRelationshipTableService,
    public ngsRnaTableService: NgsRnaTableService,
    public ngsDnaTableService: NgsDnaTableService,
    ) {
  }
  
  ngOnInit(): void {
    const typeDefinition = this.typesOfTables[this.type];
    
    if (!typeDefinition) {
      throw new Error("Table type don't exists");
    }
  
    this.title = typeDefinition.title;
    
    this.data$ = typeDefinition.observable$;
    
    this.colDef$ = of(typeDefinition.colDef);

    this.visibleColumns$ = new BehaviorSubject<void>(typeDefinition.visibleColumns);

    this.visibleColumnsAfterUpdate$ = new BehaviorSubject<void>(typeDefinition.visibleColumns);

    this.exportTablesAsCsvSubscription = this.exportTableAsCsv$.subscribe( _ => {
      this.onExportCsvClicked(true);
    })
  }

  ngOnDestroy(): void {
    this.exportTablesAsCsvSubscription.unsubscribe();
  }

  public onExportCsvClicked(exportCsv: boolean) {
    this.exportCsv$.next(exportCsv);
  }

  public onColumnSelectionChanged(columns: any) {
    this.visibleColumnsAfterUpdate$.next(columns);
  }


  private headerCheckboxSelection(params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  private checkboxSelection(params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  private dateFormatter(params) {
    let date = new Date(params.value);
    return date.toISOString().substring(0, 10)
  }

  private POSIXToYears(params) {
    let date = new Date(params.value);
    let baseDate = new Date(0);
    return String(date.getFullYear() - baseDate.getFullYear());
  }

  private POSIXToHours(params) {
    let date = new Date(params.value);
    return String(date.getHours() + ":" + date.getMinutes());
  }

  private hpoColumn(params) {
    const data = params.data.phenotype.ontologyRelationship;
    for (let item of data) {
      if(item.phenotypeOntology.ontologyType.name == "HPO") {
        return item.phenotypeOntology.name;
      }
    }
  }

  private umlsColumn(params) {
    const data = params.data.phenotype.ontologyRelationship;
    for (let item of data) {
      if(item.phenotypeOntology.ontologyType.name == "UMLS") {
        return item.phenotypeOntology.name;
      }
    }
  }
}
