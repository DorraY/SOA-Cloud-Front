import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../shared/teacher';

@Component({
  selector: 'app-existing-teachers',
  templateUrl: './existing-teachers.component.html',
  styleUrls: ['./existing-teachers.component.css']
})
export class ExistingTeachersComponent implements OnInit {
  teachers: Observable<Teacher[]>
  teachersArray: Teacher[]
  teacher: Teacher = new Teacher()


  constructor(private router: Router, private teacherService: TeacherService) { }

  async ngOnInit() {
    this.teachersArray = []
    this.reloadData()
  }
  reloadData() {
    this.teacherService.getTeacherList().subscribe(
      (data) => {
        for (let i=0;i<data.length;i++) {
          this.teachersArray.push(data[i])
        }
      }
    )
    
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(
      (data) => {
        location.reload()
      }, error => console.log(error)
    )

  }

  updateTeacher(id:number) {
    
  }

}
