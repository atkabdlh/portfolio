import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private firestore: AngularFirestore) { }

  createItem(payload: Email) {
    return this.firestore.collection('emails').add(payload);
  }
}

export interface Email {
  id?: string;
  email: string;
}
