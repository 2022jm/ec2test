import { Component, OnInit, OnDestroy } from '@angular/core';
import { CsvService } from 'src/app/services/csv/csv.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit, OnDestroy {

  fileEvent;
  constructor(public csvService: CsvService) { }

  uploadCsvSubscription$;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.uploadCsvSubscription$.unsubscribe();
  }

  uploadListener(event) {
    this.fileEvent = event;
  }

  submitListener() {
    // TODO: notify no file found

    const file = this.fileEvent.target.files[0];
    this.uploadCsvSubscription$ = this.csvService.uploadCsv(file).subscribe();
  }
}
