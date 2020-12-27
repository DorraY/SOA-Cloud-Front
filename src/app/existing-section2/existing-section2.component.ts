import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectionTeacher } from '../shared/section_teacher';

@Component({
  selector: 'app-existing-section2',
  templateUrl: './existing-section2.component.html',
  styleUrls: ['./existing-section2.component.css']
})
export class ExistingSection2Component implements OnInit {

  @ViewChild('sform') sectionFormDirective
  SectionForm: FormGroup
  section: SectionTeacher = new SectionTeacher()
  sections

  formErrors = {
    'sectionNom': ''
  }

  validationMessages = {
    'sectionNom': {
      'required': 'Le nom est obligatoire'
    }
  }


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm()
    this.sections = []
    this.reloadSections()
  }
  reloadSections() {
    
  }

  createForm() {
    this.SectionForm = this.fb.group({
      sectionNom: ['', Validators.required],
    })
    this.SectionForm.valueChanges.subscribe( data => 
      this.onValueChanged(data))
    this.onValueChanged()
  }

  onValueChanged(data?:any) {
    if (!this.SectionForm) {return ;}
    const form = this.SectionForm 
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
    this.SectionForm.reset({
      themeNom: ''
    })
    this.sectionFormDirective.resetForm()
  }

  deleteSection(id : number) {

  }

  onSubmit() {

    this.reset()

  }

    


}
