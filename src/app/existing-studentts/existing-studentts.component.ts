import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-existing-studentts',
  templateUrl: './existing-studentts.component.html',
  styleUrls: ['./existing-studentts.component.css']
})
export class ExistingStudenttsComponent implements OnInit {
  students: Observable<Student[]>
  studentsArray: Student[]

  constructor(private router: Router, private studentService: StudentService) { }

  async ngOnInit() {

    this.studentsArray = []
    this.reloadData()
    
  }
  reloadData() {
    this.studentService.getStudentList().subscribe(
      (data) => {
        for (let i=0;i<data.length;i++) {
          this.studentsArray.push(data[i])
        }
      }
    )
    
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      (data) => {
        location.reload()
      }
    )

  }

  updateStudent(id: number) {
    
  }

}
