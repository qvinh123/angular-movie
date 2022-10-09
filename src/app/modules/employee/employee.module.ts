import { EmployeeRoutingModule } from './employee.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeComponent } from './components';
import { SharedModule } from 'src/app/shared/share.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [homeComponent]
})
export class EmployeeModule { }
