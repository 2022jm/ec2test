import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GenderService } from '../../services/gender/gender.service';
import { Subscription, tap } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  genders$ = this.genderService.allGenders$;

  constructor(public genderService: GenderService) { }

  ngOnInit(): void {
  }
}
