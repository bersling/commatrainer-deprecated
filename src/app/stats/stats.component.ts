import { Component, OnInit } from '@angular/core';
import {GradingService} from '../grading.service';
import {Subscription} from 'rxjs';
import {Transaction} from '../transaction.model';
import {GradingFeedback, Correctness} from '../models';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  subs: Subscription[] = [];
  stats: Transaction[] = [];
  display = true;
  onlyDisplayWrong = false;

  constructor(
    private gradingService: GradingService
  ) { }

  ngOnInit() {
    this.subs.push(this.gradingService.stats.subscribe(next => {
      this.stats = next;
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  toggleStats() {
    this.display = !this.display;
  }

  isCorrect(grading: GradingFeedback) {
    return grading.correct === Correctness.CORRECT;
  }

  isWrong(grading: GradingFeedback) {
    return grading.correct === Correctness.WRONG;
  }

  get filteredStats() {
    if (this.onlyDisplayWrong) {
      return this.stats.filter(stat => stat.grading.correct !== Correctness.CORRECT);
    } else {
      return this.stats;
    }
  }

}