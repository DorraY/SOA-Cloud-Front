import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../shared/teacher';

@Component({
  selector: 'app-existing-teachers',
  templateUrl: './existing-teachers.component.html',
  styleUrls: ['./existing-teachers.component.css']
})
export class ExistingTeachersComponent implements OnInit {
  teachers: Observable<Teacher[]>
  teachersArray: Teacher[]


  constructor(private router: Router) { }

  async ngOnInit() {
    this.teachersArray = []
    this.reloadData()
  }
  reloadData() {
    
  }

  deleteTeacher(id: number) {

  }

  updateTeacher(id:number) {
    
  }

}
