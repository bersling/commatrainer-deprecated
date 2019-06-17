import {Injectable} from '@angular/core';
import {GradingService} from './grading.service';
import {TaskStoreService} from './task-store.service';
import {Task} from './models';

@Injectable()
export class RecommenderService {

  constructor(
    private gradingService: GradingService,
    private taskStoreService: TaskStoreService
  ) { }

  getNextTask(): Task {
    const tasks = this.taskStoreService.allTasks();
    const r = Math.floor(tasks.length * Math.random());
    return tasks[r];
  }

}