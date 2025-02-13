import { Component, OnInit } from '@angular/core';
import {PersistenceService} from '../persistence.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private persistenceService: PersistenceService
  ) { }

  ngOnInit() {
  }

  onClickDelete() {
    this.persistenceService.deleteAllData();
  }

}