import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminstratifService } from '../services/adminstratif.service';
import {Adminstratif} from '../shared/adminstratif'

@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.css']
})
export class PersonnelFormComponent implements OnInit {
  @ViewChild('pform') personnelFormDirective
  PersonnelForm: FormGroup
  adminstratif: Adminstratif= new Adminstratif()


  formErrors= {
    'name':'',
    'lastname': '',
    'job': ''
  }

  validationMessages = {
    'job': {
      'required' : 'job obligatoire'
    },
    'name': {
      'required': 'Prénom obligatoire'
    },
    'lastname': {
      'required': 'Nom obligatoire'
    },
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private adminstratifService:AdminstratifService
  ) { }


 
  ngOnInit() {

    this.createForm()
  }

   createForm() {
     this.PersonnelForm = this.fb.group({
      job: ['', Validators.required ],
      name: ['',Validators.required],
      lastname: ['',Validators.required],
     })

     this.PersonnelForm.valueChanges.subscribe( data =>
      this.onValueChanged(data))
      this.onValueChanged()
   }

   onValueChanged(data?:any) {
    if (!this.PersonnelForm) {return ;}
    const form = this.PersonnelForm 
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {   
        this.formErrors[field] = ''
        const control = form.get(field)
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field]
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
               console.log(control.errors) 
              this.formErrors[field] +=messages[key] + ''
            } 
          }
        }
      }
    }
   }

   reset() {
     this.PersonnelForm.reset({
       section: '',
       name: '',
       lastname: ''
     })
     this.personnelFormDirective.resetForm()
   }

   onSubmit() {
     console.log(this.adminstratif)
     this.adminstratifService.createAgent(this.adminstratif).subscribe(
       data => {
         console.log(data)
       },
       error => console.log(error)
     )
     this.reset()
   }
}