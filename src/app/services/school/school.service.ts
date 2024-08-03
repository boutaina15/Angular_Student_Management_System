import { Injectable } from '@angular/core';
import { School } from '../../models/Schoolmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  getSchool(arg0: number) {
    throw new Error('Method not implemented.');
  }
  getSchools() {
    throw new Error('Method not implemented.');
  }

  private apiServerUrl = 'http://localhost:8080/api/v1';
  //http = inject(HttpClient)
  constructor(private http:HttpClient){}

  public getAllSchools(): Observable<School[]> {
    return this.http.get<School[]>(`${this.apiServerUrl}/school/all`);
  }

  public getSchoolById(schoolId: number):Observable<School>{
    return this.http.get<School>(`${this.apiServerUrl}/school/${schoolId}`);
  }

  public addSchool(school: School):Observable<School>{
    return this.http.post<School>(`${this.apiServerUrl}/school/add`, school);
  }
  
  public updateSchool(schoolId: number, school: School):Observable<School>{
    return this.http.put<School>(`${this.apiServerUrl}/school/update/${schoolId}`, school);
  }

  public deleteSchool(schoolId: number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/school/delete/${schoolId}`);
  }
}

