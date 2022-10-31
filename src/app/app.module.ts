import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { StartComponent } from './start/start.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSectionComponent,
    SkillSectionComponent,
    StartComponent,
    ImprintComponent,
    MyWorkComponent,
    AboutMeSectionComponent,
    ContactMeSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NoopAnimationsModule
  ],
  providers: [ 
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
