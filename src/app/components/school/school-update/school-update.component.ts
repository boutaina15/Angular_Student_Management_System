import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from '../../../models/Schoolmodel';
import { SchoolService } from '../../../services/school/school.service';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.css']
})
export class SchoolUpdateComponent implements OnInit {
  school: School = { schoolId: 0, schoolName: '', email: '' };
  editingSchool: boolean = false;

  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    if (id) {
      this.editingSchool = true;
      this.schoolService.getSchoolById(id).subscribe((school: School) => {
        this.school = school;
      });
    } else {
      this.editingSchool = false;
    }
  }

  onSubmit(): void {
    if (this.school.schoolId) {
      this.schoolService.updateSchool(this.school.schoolId, this.school).subscribe(() => {
        this.router.navigate(['/schools']);
      });
    }
  }
}
