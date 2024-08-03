import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../../services/school/school.service';
import { School } from '../../../models/Schoolmodel';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {
  school: School | undefined;

  constructor(private route: ActivatedRoute, private schoolService: SchoolService) {}

  ngOnInit(): void {
    const schoolId = this.route.snapshot.paramMap.get('id');
    if (schoolId) {
      this.schoolService.getSchoolById(Number(schoolId)).subscribe((data: School) => {
        this.school = data;
      });
    }
  }
}
