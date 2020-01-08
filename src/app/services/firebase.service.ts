import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { analytics } from 'firebase';


export interface Listing{
  id?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedroms?: string;
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  listingsCollectionRef: AngularFirestoreCollection<Listing>;
  listings: Observable<Listing[]>;
  listing: Observable<Listing>;
  test:any;

  constructor(private afs: AngularFirestore) {}

  getListings(){
    this.listingsCollectionRef = this.afs.collection<Listing>('/listings');
    // this.listings = this.afs.collection<Listing>('/listings').snapshotChanges().
    this.listings = this.listingsCollectionRef.snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Listing;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    }));
    return this.listings;
  }

  getListingDetails(id:string){
    // this.listingsCollectionRef = this.afs.collection<Listing>('/listings'+id);
    // this.listing = this.listingsCollectionRef.snapshotChanges().pipe(map(actions => {
    //   return actions.map(action => {
    //     const data = action.payload.doc.data() as Listing;
    //     const id = action.payload.doc.id;
    //     return { id, ...data };
    //   });
    // }));
    return this.afs.collection("listings").doc(id).ref.get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

    // console.log(this.test);
    // this.listing = this.afs.doc<Listing>('listings/'+id).valueChanges();
    // return this.afs.collection("listings").doc(id).ref.get().then( doc =>{
    //   // console.log("doc:",doc.data());
    //   return doc.data();
    // })
  }
}
