import { Component, OnInit } from '@angular/core';
import {StudentService} from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any ;
  constructor(private studentService: StudentService) { }

  ngOnInit() {

    let promise = this.studentService.getAllStudent();
    promise.then(
       response => {
         this.students = response['res'];
         console.log(this.students);
       },
      error => {
         console.log(JSON.stringify(error));
      }
    );
  }

}
