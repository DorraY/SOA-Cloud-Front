import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionService } from '../services/section.service';
import { StudentService } from '../services/student.service';
import { Section } from '../shared/section';
import { Student } from '../shared/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('sform') studentFormDirective
  StudentForm: FormGroup
  student: Student= new Student()
  section: Section = new Section()
  sections

  formErrors= {
    'name':'',
    'lastname': '',
    'section': ''
  }

  validationMessages = {
    'section': {
      'required' : 'Section obligatoire'
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
    private studentService: StudentService,
    private sectionService: SectionService,
  ) { }

  reloadSection() {
    this.sectionService.getSectionList().subscribe(
      (section) => {
        for (let i=0 ; i<section.length;i++) {
          this.sections.push(section[i])
        }
      }
    )
  }
 
  ngOnInit() {
    this.sections = []
    this.createForm()
    this.reloadSection()
  }

   createForm() {
     this.StudentForm = this.fb.group({
      section: ['', Validators.required ],
      name: ['',Validators.required],
      lastname: ['',Validators.required],
     })

    this.StudentForm.valueChanges.subscribe( data =>
      this.onValueChanged(data))
    this.onValueChanged()
   }

   onValueChanged(data?:any) {
    if (!this.StudentForm) {return ;}
    const form = this.StudentForm 
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
     this.StudentForm.reset({
       section: '',
       name: '',
       lastname: ''
     })
     this.studentFormDirective.resetForm()
   }

   onSubmit() {
     console.log(this.student)
     this.studentService.createStudent(this.student).subscribe(
       data => {
         console.log(data)
       },
       error => console.log(error)
     )
     this.reset()

   }



}
