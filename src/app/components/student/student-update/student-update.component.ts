import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../models/Studentmodel';
import { School } from '../../../models/Schoolmodel';
import { StudentService } from '../../../services/student/student.service';
import { SchoolService } from '../../../services/school/school.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  student: Student = { id: 0, name: '', birth: new Date(), age: 0, school: { schoolId: 0, schoolName: '', email: '' } };
  schools: School[] = [];
  editingStudent: boolean = false;

  constructor(
    private studentService: StudentService,
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSchools();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.editingStudent = true;
      this.studentService.getStudent().subscribe((students: Student[]) => {
        this.student = students.find(student => student.id === id) || this.student;    
      });
    } else {
      this.editingStudent = false;
    }
  }

  loadSchools(): void {
    this.schoolService.getAllSchools().subscribe((schools: School[]) => {
      this.schools = schools;      
    });
  }

  onSubmit(): void {
    if (this.student.id) {
      this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }
}
