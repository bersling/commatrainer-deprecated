import { Injectable } from '@angular/core';
import {PersistenceService} from './persistence.service';
import { Task, TaskType, SeparateTextTask, SeparateTextInput, StudentInput,SeparateTextSeparator, Correctness } from './models';
import {Transaction} from './transaction.model';

import {BehaviorSubject} from 'rxjs';

@Injectable()
export class GradingService {

  stats = this.persistenceService.history$;

  constructor(
    private persistenceService: PersistenceService
  ) {}
  
  grade(task: Task, input: StudentInput) {
    let grading;
    if (task.type === TaskType.COMMA) {
      const t = task as SeparateTextTask;
      const i = input as SeparateTextInput;
      const isCompletelyCorrect = t.words
        .every((word, idx) => {
          let isCorrect;
          if (word.separatorRight === SeparateTextSeparator.OPTIONAL_COMMA) {
            isCorrect = true;
          } else {
            if (i.separatedWords[idx].separatorRight === word.separatorRight) {
              isCorrect = true;
            } else {
              isCorrect = false;
            }
          }
          return isCorrect;
        });
      grading = {
        solution: t.words,
        correct: isCompletelyCorrect ? Correctness.CORRECT : Correctness.WRONG
      }
    } else {
      throw new Error('task type grading not implemented');
    }

    this.persistenceService.addHistoryEntry({
      task, input, grading
    });

    return grading;
  }

}