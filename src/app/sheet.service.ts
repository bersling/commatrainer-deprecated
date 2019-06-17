import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable()
export class SheetService {

  constructor(
    private http: HttpClient
  ) { }

  getCompetencesNotWorkingForbidden() {
    const apiKey = `AIzaSyCccGkjR5qNbGVYqum-r_IKV8WmQSoc0Ic`;
    const spreadSheetId = `1-B6zUCLKn-P8frvIVDccxTwHcbb7cehic9urCbJMwPs`;
    const sheetId = `504370418`;
    this.http.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/${sheetId}!A1:D5&key=${apiKey}`).subscribe(resp => {

    });
  }

}