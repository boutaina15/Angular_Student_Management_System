import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../models/Studentmodel';
import { School } from '../../../models/Schoolmodel';
import { StudentService } from '../../../services/student/student.service';
import { SchoolService } from '../../../services/school/school.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student = { id: 0, name: '', birth: new Date(), age: 0, school: { schoolId: 0, schoolName: '', email: '' } };
  schools: School[] = [];

  constructor(
    private studentService: StudentService,
    private schoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools(): void {
    this.schoolService.getAllSchools().subscribe((schools: School[]) => {
      this.schools = schools;
      console.log('schools',this.schools)
    });
  }

  
  onSubmit(): void {
    this.loadSchools();
    console.log(this.student)
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
