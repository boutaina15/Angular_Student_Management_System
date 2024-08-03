 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { SchoolListComponent } from './components/school/school-list/school-list.component';
import { SchoolAddComponent } from './components/school/school-add/school-add.component';
import { SchoolUpdateComponent } from './components/school/school-update/school-update.component';
const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: StudentAddComponent },
  { path: 'edit-student/:id', component: StudentUpdateComponent },
  {path: 'schools', component: SchoolListComponent},
  {path: 'add-school', component: SchoolAddComponent},
  {path: 'edit-school/:id', component: SchoolUpdateComponent},
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
