import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Student } from '../../models/Studentmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents() {
    throw new Error('Method not implemented.');
  }

  private apiServerUrl = 'http://localhost:8080/api/v1';
  //http = inject(HttpClient)
  constructor(private http:HttpClient){}

  public getStudent():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiServerUrl}/student`);
  }

  public addStudent(student: Student):Observable<Student>{
    return this.http.post<Student>(`${this.apiServerUrl}/student/add`, student);
  }
  
  public updateStudent(id: number, student: Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiServerUrl}/student/update/${id}`, student);
  }

  public deleteStudent(id: number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/student/delete/${id}`);
  }
}
