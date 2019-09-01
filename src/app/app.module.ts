import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {CurrentTrainingComponent} from './training/current-training/current-training.component';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import {AppRoutingModule} from './app-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
