import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GradingFeedback, TaskType, StudentInput, SeparateTextTask, SeparateTextInput, Correctness } from '../models';

import { CompetenceService } from '../competences/competence.service';

import {GradingService} from '../grading.service';

import { deepEqual } from './deep-equal';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task;
  input: StudentInput = null;
  grading: GradingFeedback = null;

  @Output() loadNext = new EventEmitter<void>();

  constructor(
    private competenceService: CompetenceService,
    private gradingService: GradingService
  ) { }

  onInputChange(e) {
    this.input = e;
  }

  onSubmit() {
    this.grading = this.gradingService.grade(this.task, this.input);
  }

  next() {
    this.loadNext.emit();
  }
  

  // getDescription() {
  //   return this.competenceService.getCompetence(this.task.competence).description;
  // }

  isCorrect() {
    return this.grading && this.grading.correct === Correctness.CORRECT;
  }

  isWrong() {
    return this.grading && this.grading.correct === Correctness.WRONG;
  }

}