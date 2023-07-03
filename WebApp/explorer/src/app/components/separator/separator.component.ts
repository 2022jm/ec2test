import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {
  @Input() height: number = 12;

  constructor() {}

  ngOnInit(): void {
  }
}
