import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { CommonModule } from '@angular/common';
import { SchoolAddComponent } from './components/school/school-add/school-add.component';
import { SchoolListComponent } from './components/school/school-list/school-list.component';
import { SchoolUpdateComponent } from './components/school/school-update/school-update.component';
import { SchoolDetailComponent } from './components/school/school-detail/school-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    SchoolAddComponent,
    SchoolListComponent,
    SchoolUpdateComponent,
    SchoolDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
