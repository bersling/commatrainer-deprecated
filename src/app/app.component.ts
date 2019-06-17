
import { Component, ChangeDetectorRef } from '@angular/core';
import { TaskStoreService } from './task-store.service';
import { Task } from './models';
import { Subscription } from 'rxjs';
import {RecommenderService} from './recommender.service';
import {SheetService} from './sheet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task: Task;
  reloading = false;

  constructor(
    private taskStoreService: TaskStoreService,
    private recommenderService: RecommenderService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.task = this.recommenderService.getNextTask();
  }

  reload() {
    this.reloading = true;
    this.cdr.detectChanges();
    this.reloading = false;
    this.cdr.detectChanges();
  }

  onLoadNext() {
    this.task = this.recommenderService.getNextTask();
    this.reload();
  }

}
