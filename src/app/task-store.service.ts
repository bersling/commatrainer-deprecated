import { Injectable } from '@angular/core';
import { CommaMapperService } from './comma/comma-mapper.service';
import { SeparateTextTask, Task, TaskType } from './models';
import { commaTasks } from './comma-tasks';
import {bsp2} from './comma-tasks2';

import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

// export interface IntermediateFormat {
//   task: string;
//   competence: string;
//   feedback?: string;
// }

// export const parsedCommaTasks: IntermediateFormat[] = [];

// const entities = commaTasks.split('\n\n').filter(line => line !== '');
// let mappedStr = ``;

// entities
//   .forEach(entity => {
//     const props = entity.split('\n');
//     const task = props[0];
//     const competence = props[1];
//     const feedback = props[2] ? props[2] : null;
//     parsedCommaTasks.push({
//       task, competence, feedback
//     });
//     mappedStr = mappedStr + competence + `\n`;
//   });

@Injectable()
export class TaskStoreService {

  private tasks: Task[] = [];

  constructor(
    private commaMapperService: CommaMapperService
  ) {
    this.tasks = bsp2
      .map(text => {
        return {
          type: TaskType.COMMA,
          words: this.commaMapperService.mapTextToArray(text),
          // feedback: intermediateFormatTask.feedback,
          // competence: intermediateFormatTask.competence
        }
      });
  }

  allTasks() {
    return this.tasks;
  }

}