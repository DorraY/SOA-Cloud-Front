import {Routes} from '@angular/router'

import {HomeComponent} from '../home/home.component'

import { ExistingStudenttsComponent } from '../existing-studentts/existing-studentts.component'
import { ExistingSectionsComponent } from '../existing-sections/existing-sections.component'
import { StudentFormComponent } from '../student-form/student-form.component'
import { ExistingPersonnelsComponent } from '../existing-personnels/existing-personnels.component'
import { PersonnelFormComponent } from '../personnel-form/personnel-form.component'
import { ExistingTeachersComponent } from '../existing-teachers/existing-teachers.component'
import { TeacherFormComponent } from '../teacher-form/teacher-form.component'
import { ExistingSection2Component } from '../existing-section2/existing-section2.component'

export const routes:Routes = [
    {path:'home', component: HomeComponent},
    {path: 'existing-students', component: ExistingStudenttsComponent},
    {path: 'existing-sections', component: ExistingSectionsComponent},
    {path: 'existing-sections-teachers', component: ExistingSection2Component},
    {path: 'existing-personnels', component: ExistingPersonnelsComponent},
    {path: 'existing-teachers', component: ExistingTeachersComponent},
    {path: 'student-form', component: StudentFormComponent},
    {path: 'teacher-form', component: TeacherFormComponent},
    {path: 'personnel-form', component: PersonnelFormComponent},
    {path: '' , redirectTo: '/home', pathMatch: 'full'},

]