import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  ColDef,
  ColumnApi,
  ColumnResizedEvent,
  CsvExportParams,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() data$: Observable<any>;
  @Input() colDef$: Observable<ColDef[]>;
  @Input() exportCsv$: Observable<boolean>;
  @Input() visibleColumnsAfterUpdate$: Observable<any>;

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;
  public rowSelection = 'multiple';
  public defaultColDef: ColDef = {
    resizable: true,
    filter: true,
    sortable: true,
  }
  
  private downloadCsvSubscription: Subscription;
  private visibleColumnsSubscription: Subscription;
  private visibleColumns;

  constructor() { }

  ngOnInit(): void {
    this.downloadCsvSubscription = this.exportCsv$.subscribe(data => {
      // TODO: file names recive the whole object
      const exportColumns = this.gridColumnApi.getAllColumns()!;
      exportColumns.shift();
      console.log(exportColumns);
      const params:CsvExportParams = {
        columnKeys: exportColumns,
        processCellCallback: (params: any): string => this.processCells(params)
      }
      this.gridApi.exportDataAsCsv(params);
    });
    
  }

  ngOnDestroy(): void {
    this.downloadCsvSubscription.unsubscribe();
    this.visibleColumnsSubscription.unsubscribe();
  }

  processCells(params: any): string {
    const formateDateList: string[] = ["DOB", "Date of sampling"];
    const posixToYearsList: string[] = ["Age at blood draw"];
    const posixToHoursList: string[] = ["Draw Time", "Total Processing Time"];
    // get the column name and formate the cell to export csv
    const columnName:string = params.column.colDef.headerName;
    
    if (formateDateList.includes(columnName)) {
      return this.dateFormatter(params);
    } else if (posixToYearsList.includes(columnName)) {
      return this.POSIXToYears(params);
    } else if(posixToHoursList.includes(columnName)) {
      return this.POSIXToHours(params);
    }

    return params.value;
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
    // set the columns to fit in the table
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDomLayout('autoHeight');

    // this subscription updates the columns to hide or show
    this.visibleColumnsSubscription = this.visibleColumnsAfterUpdate$.subscribe(data => {
      this.visibleColumns = data;
      for (let col of this.visibleColumns) {
        const column = (this.gridColumnApi.getAllColumns()!.find(x => x.getColDef().headerName == col.name));
        this.gridColumnApi.setColumnVisible(column!, col.visible);
      }
      // resize columns width to fit in the table
      this.gridApi.sizeColumnsToFit();
    })

  }
  
  public showPagination() {
    console.log("Current page: ", this.gridApi.paginationGetCurrentPage());
    console.log("Total number of pages: ", this.gridApi.paginationGetTotalPages());
    console.log("Page size: ",this.gridApi.paginationGetPageSize());

  }

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

  private checkboxSelection(params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  private headerCheckboxSelection(params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };

}
