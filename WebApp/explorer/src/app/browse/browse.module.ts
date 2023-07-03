import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './browse.component';
import { BrowseHeaderComponent } from './components/browse-header/browse-header.component';
import { SearchComponent } from './components/search/search.component';
import { LayoutModule } from '../layout/layout.module';
import { AgGridModule } from 'ag-grid-angular';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    BrowseComponent,
    SearchComponent,
    BrowseHeaderComponent,
    TableWrapperComponent,
    TableHeaderComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AgGridModule.withComponents([]),
    NgSelectModule,
    FormsModule,
  ]
})
export class BrowseModule { }
