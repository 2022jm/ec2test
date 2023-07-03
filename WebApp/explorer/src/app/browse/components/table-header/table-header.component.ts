import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  hideSelect: boolean = false;
  list = ["Phen relationship", "NGS - RNA", "NGS - DNA"];

  @Input() title: string;
  @Input() visibleColumns$: Observable<any>;
  @Output() exportCsvClicked = new EventEmitter<boolean>()
  @Output() columnsSelectionChanged = new EventEmitter<any>()

  selectedColumns;
  columnsToEmit;

  constructor() { }

  ngOnInit(): void {
    if (this.list.includes(this.title)) {
      this.hideSelect = true;
    }
    this.visibleColumns$.subscribe(data => this.selectedColumns = data.map(x => x.name));
    // this.visibleColumns$.subscribe(data => console.log("In the subscription:", data.map(x => x.name)));
  }

  exportCsv() {
    this.exportCsvClicked.emit(true);
  }

  onChange($event) {
    const selectedColumnsName = $event.map(x => x.name);

    this.visibleColumns$.subscribe(data => {
      for (let i of data) {
        if (selectedColumnsName.includes(i.name)) {
          i.visible = true;
        } else {
          i.visible = false;
        }
      }
      this.columnsToEmit = data;
    })
    this.columnsSelectionChanged.emit(this.columnsToEmit);
  }
}
