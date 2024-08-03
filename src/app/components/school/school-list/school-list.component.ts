import { Component, OnInit } from '@angular/core';
import { School } from '../../../models/Schoolmodel';
import { SchoolService } from '../../../services/school/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[] = [];

  constructor(
    private schoolService: SchoolService,
    private router: Router
  ) {}  

  ngOnInit(): void {
    this.getAllSchools();
  }

  getAllSchools(): void {
    this.schoolService.getAllSchools().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

  onDelete(schoolId: number): void {
    this.schoolService.deleteSchool(schoolId).subscribe(() => {
      this.getAllSchools(); // Refresh the list after deletion
    });
  }

  onEdit(school: School): void {
    this.router.navigate(['/edit-school', school.schoolId]);
  }
}
