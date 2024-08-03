import { Component, OnInit } from '@angular/core';
import { School } from '../../../models/Schoolmodel';
import { SchoolService } from '../../../services/school/school.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrl: './school-add.component.css'
})
export class SchoolAddComponent implements OnInit{
  school: School = {
    schoolId: 0,
    schoolName: '',
    email: ''
  };
  constructor(private schoolService: SchoolService, private router: Router,
    private route: ActivatedRoute,

  ) { }
  ngOnInit(): void {
    const schoolId = Number(this.route.snapshot.paramMap.get('schoolId'));
    // console.log(id);

    
  }

  onSubmit(): void {
    this.schoolService.addSchool(this.school).subscribe(() => {
      this.router.navigate(['/schools']);
    });

  }

}
