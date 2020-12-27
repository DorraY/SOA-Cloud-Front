import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../shared/student';

@Component({
  selector: 'app-existing-studentts',
  templateUrl: './existing-studentts.component.html',
  styleUrls: ['./existing-studentts.component.css']
})
export class ExistingStudenttsComponent implements OnInit {
  students: Observable<Student[]>
  studentsArray: Student[]

  constructor(private router: Router) { }

  async ngOnInit() {
    this.studentsArray = []
    this.reloadData()
    
  }
  reloadData() {
    
  }

  deleteStudent(id: number) {

  }

  updateStudent(id: number) {
    
  }

}
