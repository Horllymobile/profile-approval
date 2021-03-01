import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
// environment
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
