import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { ChartsModule } from 'ng2-charts';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyDVGg0GgxI4_1ykXz3ROvUiOc44eXk-kZI',
  authDomain: 'mkt-49ec1.firebaseapp.com',
  databaseURL: 'https://mkt-49ec1.firebaseio.com',
  projectId: 'mkt-49ec1',
  storageBucket: 'mkt-49ec1.appspot.com',
  messagingSenderId: '784991356326',
  appId: '1:784991356326:web:2379a7630514672e03bb67',
  measurementId: 'G-N331Z36MFX'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    ChartsModule,
    MatMenuModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
