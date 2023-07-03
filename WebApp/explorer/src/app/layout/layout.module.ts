import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SeparatorComponent } from '../components/separator/separator.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SeparatorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SeparatorComponent,
  ]
})
export class LayoutModule { }
