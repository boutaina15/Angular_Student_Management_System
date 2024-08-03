import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Studentmodel';
import { StudentService } from '../../../services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
editingStudent: any;
onUpdateStudent() {
throw new Error('Method not implemented.');
}

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}  

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    this.studentService.getStudent().subscribe((students: Student[]) => {
      this.students = students;
      console.log(this.students)
    });
  }

  onDelete(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudent(); // Refresh the list after deletion
    });
  }

  onEdit(student: Student): void {
    this.router.navigate(['/edit-student', student.id]);
  }
}


