import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { BodySidebarComponent } from './body-sidebar/body-sidebar.component';
import { QuotationProcessingComponent } from './quotation-processing/quotation-processing.component';
import { QuotationInquiryComponent } from './quotation-inquiry/quotation-inquiry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BodyMainComponent } from './body-main/body-main.component';
import { BodyTitleComponent } from './body-title/body-title.component';
import { BodyHeaderComponent } from './body-header/body-header.component';

const appRoutes: Routes = [
  { path: 'quotation-processing', component: QuotationProcessingComponent, 
  data: {headerTitle: 'Quotation / Quotation Processing'} },
  { path: 'quotation-inquiry', component: QuotationInquiryComponent, 
  data: {headerTitle: 'Quotation / Quotation Inquiry'} },
  { path: '', redirectTo: '/quotation-processing', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BodySidebarComponent,
    QuotationProcessingComponent,
    QuotationInquiryComponent,
    PageNotFoundComponent,
    BodyMainComponent,
    BodyTitleComponent,
    BodyHeaderComponent
  ],
  imports: [
    BrowserModule,CommonModule, MatToolbarModule,
     MatInputModule, MatTableModule, MatPaginatorModule,
     AngularFontAwesomeModule, FormsModule, RouterModule.forRoot(
      appRoutes,  { enableTracing: true } // <-- debugging purposes only
    )
  ],
   exports: [CommonModule, MatToolbarModule,
    MatInputModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
