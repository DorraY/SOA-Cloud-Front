import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminstratifService } from '../services/adminstratif.service';
import {Adminstratif} from '../shared/adminstratif'

@Component({
  selector: 'app-existing-personnels',
  templateUrl: './existing-personnels.component.html',
  styleUrls: ['./existing-personnels.component.css']
})
export class ExistingPersonnelsComponent implements OnInit {
  adminstratifs: Observable<Adminstratif[]>
  adminstratifsArray: Adminstratif[]

  constructor(private router: Router, 
    private adminstratifService: AdminstratifService
    ) { }

  async ngOnInit() {
    this.adminstratifsArray = []
    this.reloadData()
  }

  reloadData() {
    this.adminstratifs = this.adminstratifService.getAgentList()
    this.adminstratifs.subscribe((adminstratifs)   => {
      let i=0
      while (i!==adminstratifs.length) {
        this.adminstratifsArray.push(adminstratifs[i])
        i++
      }
    })
    
  }

  deleteAdminstratif(id: number) {

    this.adminstratifService.deleteAgent(id).subscribe(
      data => {
        console.log(data)
        location.reload()
      }, error => console.log(error)
    )

  }

  updateAdminstratif(id: number) {
    this.router.navigate(['adminstratif-details',id])
    
  }

}
