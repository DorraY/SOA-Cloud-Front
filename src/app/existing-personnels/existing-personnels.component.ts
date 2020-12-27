import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Adminstratif} from '../shared/adminstratif'

@Component({
  selector: 'app-existing-personnels',
  templateUrl: './existing-personnels.component.html',
  styleUrls: ['./existing-personnels.component.css']
})
export class ExistingPersonnelsComponent implements OnInit {
  adminstratifs: Observable<Adminstratif[]>
  adminstratifsArray: Adminstratif[]

  constructor(private router: Router) { }

  async ngOnInit() {
    this.adminstratifsArray = []
    this.reloadData()
  }

  reloadData() {
    
  }

  deleteAdminstratif(id: number) {

  }

  updateAdminstratif(id: number) {
    
  }

}
