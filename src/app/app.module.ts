import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';

import { FirebaseService } from './services/firebase.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const  firebaseConfig = {
  apiKey: "AIzaSyC8SgkS6PpwTTZW4-nQZ_N7laJu2Fv3eO4",
  authDomain: "test-20770.firebaseapp.com",
  databaseURL: "  ",
  projectId: "test-20770",
  storageBucket: "test-20770.appspot.com",
  messagingSenderId: "828053168504",
  appId: "1:828053168504:web:198b4ab4d0c3646699a88d",
  measurementId: "G-KNK3J2CKL1"

  };

const appRoutes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path:'add-listing', component:AddListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [FirebaseService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
