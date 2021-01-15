import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionTeacherService } from '../services/section-teacher.service';
import { TeacherService } from '../services/teacher.service';
import { Section } from '../shared/section';
import { Teacher } from '../shared/teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  @ViewChild('tform') teacherFormDirective
  TeacherForm: FormGroup
  teacher: Teacher = new Teacher()
  section: Section = new Section()
  sections

  formErrors= {
    'name':'',
    'lastname': '',
    'section': '',
    'speciality' : ''
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
    'speciality': {
      'required': 'Spécialité obligatoire'
    },
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sectionService: SectionTeacherService,
    private teacherSerice: TeacherService
  ) { }

  reloadSection() {
    this.sectionService.getTeacherSectionList().subscribe(
      (section) => {
        for (let i=0;i<section.length;i++) {
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
    this.TeacherForm = this.fb.group({
      section: ['', Validators.required ],
      name: ['',Validators.required],
      lastname: ['',Validators.required],
      speciality: ['',Validators.required]
    })

    this.TeacherForm.valueChanges.subscribe(data  => 
      this.onValueChanged(data))
      this.onValueChanged()

  }

  onValueChanged(data?:any) {
    if (!this.TeacherForm) {return ;}
    const form = this.TeacherForm 
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
    this.TeacherForm.reset({
      section: '',
      name: '',
      lastname: ''
    })
    this.teacherFormDirective.resetForm()
  }

  onSubmit() {
    console.log(this.teacher)
    this.teacherSerice.createTeacher(this.teacher).subscribe(
      data => {
        console.log(data)
      },
      error => console.log(error)
    )
    this.reset()

  }



}
