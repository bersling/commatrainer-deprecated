import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import {BehaviorSubject} from 'rxjs';
import { apps, initializeApp, firestore, auth } from 'firebase';

enum LOCAL_STORAGE_KEYS {
  HISTORY = 'HISTORY',
  USER_ID = 'USER_ID'
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0; // tslint:disable-line
    const v = c === 'x' ? r : (r & 0x3 | 0x8); // tslint:disable-line
    return v.toString(16);
  });
}

const TABLE_NAME = `inputs`;

@Injectable()
export class PersistenceService {

  history$ = new BehaviorSubject<Transaction[]>(this.history);

  private cachedHistory: Transaction[];
  private _user;
  private get user() {
    if (this._user) {
      return this._user;
    } else if (localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ID)) {
      this._user = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ID);
      return this._user;
    } else {
      this._user = uuidv4();
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, this._user);
      return this._user;
    }
  }

  db: firestore.Firestore;

  constructor() {
    if (apps.length === 0) {
      var config = {
        apiKey: "AIzaSyCccGkjR5qNbGVYqum-r_IKV8WmQSoc0Ic",
        authDomain: "commatrainer.firebaseapp.com",
        projectId: "commatrainer"
      };
      initializeApp(config);
    }
    this.db = firestore();
  }

  writeEntryToFirestore(entry: Transaction) {
    const tableRef = this.db.collection(TABLE_NAME);
    return tableRef.add({
      user: this.user,
      timestamp: new Date().getTime(),
      input: entry.input
    });
  }

  private get history(): Transaction[] {
    if (this.cachedHistory) {
      return this.cachedHistory;
    } else {
      this.cachedHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.HISTORY)) || [];
      return this.cachedHistory;
    }
  }

  addHistoryEntry(entry: Transaction) {
    const history = this.history;
    this.history.push(entry);
    localStorage.setItem(LOCAL_STORAGE_KEYS.HISTORY, JSON.stringify(this.cachedHistory));
    this.cachedHistory = this.history;
    this.history$.next(this.cachedHistory);
    
    this.writeEntryToFirestore(entry);
  }

  deleteAllData() {
    const r = confirm('Fortschritte wirklich löschen?');
    if (r) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.HISTORY);
      this.cachedHistory = null;
      this.history$.next(this.cachedHistory);
    }
  }

}