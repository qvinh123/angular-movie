import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { sharedMaterial } from './material';
import { sharedComponent } from './components'
import { SwiperModule } from "swiper/angular";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    sharedComponent
  ],
  imports: [
    CommonModule,
    sharedMaterial,
    SwiperModule
  ],
  providers: [],
  exports: [
    sharedComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
