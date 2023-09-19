import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableBasicExample } from './app.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from './service/services.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    TableBasicExample,
    Page2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [TableBasicExample]
})
export class AppModule { }
