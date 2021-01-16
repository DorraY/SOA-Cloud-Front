import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home/home.component'

import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatListModule} from '@angular/material/list';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component'

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule, MatAutocompleteModule} from '@angular/material';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import { AideComponent } from './aide/aide.component';

import { HttpClientModule } from '@angular/common/http';

import { ExistingStudenttsComponent } from './existing-studentts/existing-studentts.component';
import { ExistingSectionsComponent } from './existing-sections/existing-sections.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ExistingPersonnelsComponent } from './existing-personnels/existing-personnels.component';
import { PersonnelFormComponent } from './personnel-form/personnel-form.component';
import { ExistingTeachersComponent } from './existing-teachers/existing-teachers.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { ExistingSection2Component } from './existing-section2/existing-section2.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    
    AboutComponent,
    AideComponent,
    FinishedComponent,
    ExistingStudenttsComponent,
    ExistingSectionsComponent,
    StudentFormComponent,
    ExistingPersonnelsComponent,
    PersonnelFormComponent,
    ExistingTeachersComponent,
    TeacherFormComponent,
    ExistingSection2Component
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    AppRoutingModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    HttpClientModule,
    FormsModule
    


  ],
  entryComponents: [
    AboutComponent,AideComponent, 
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
