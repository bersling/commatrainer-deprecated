import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {competences, Competence} from './competences';
import {PersistenceService} from '../persistence.service';
import {Correctness} from '../models';
import {TaskType, SeparateTextTask} from '../models';

type Skill = number; // between -inf and inf
type Mastery = number; // between 0 and 1

export interface CompetenceData {
  numTotal: number;
  numCorrect: number;
}

export type CompetenceMap = { [id: string]: CompetenceData }

function objectToArray(obj) {
  Object.keys(obj)
    .map(key => {
      return {
        key,
        value: obj[key]
      };
    });
}

@Injectable()
export class CompetenceService {

  competences: Observable<CompetenceMap> = this.persistenceService.history$.pipe(map(transactions => {
    const comps = {}
    transactions.forEach(trans => {
      const task = trans.task;
      if (task.type === TaskType.COMMA) {
        const t = task as SeparateTextTask;
        t.words.forEach(word => {
          const key = word.competence;
          const prevValue = comps[key] || {};
          const isCorrect = trans.grading.correct === Correctness.CORRECT;
          const prevTotal = prevValue.numTotal || 0;
          const newTotal = prevTotal + 1;
          const prevCorrect = prevValue.numCorrect || 0;
          const newCorrect = isCorrect ? prevCorrect + 1 : prevCorrect;
          const newValue = {
            numTotal: newTotal,
            numCorrect: newCorrect
          }
          comps[key] = newValue;
        });
      } else {
        console.warn(`competence service not implemented for task type ${task.type}`);
      }
    });
    return comps;
  }));
  competencesArray = this.competences.pipe(map(comps => objectToArray(comps)));

  constructor(
    private persistenceService: PersistenceService
  ) { }

  getCompetence(id: string): Competence {
    return competences[id];
  }

  ratioCorrect(competenceData: CompetenceData): number {
    return competenceData.numCorrect / competenceData.numTotal;
  }

}