import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "util";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAllStudent() {
    return new Promise((resolve, reject) =>
      this.http.get<any>("/api/student/getAllStudent" ).subscribe(
        response =>{
          let res = { 'res': response };
          resolve(res);
        },
        error => {
          reject(error);
        }
       )
     );
  }
}
