import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {competences} from '../competences/competences';

import {
  SeparateTextFeedback,
  SeparateTextInput,
  SeparateTextSeparator,
  SeparateTextTask,
  SeparateTextWord,
  StudentInputType,
  TaskInputComponent
} from '../models';

@Component({
  selector: 'app-comma-task',
  templateUrl: './comma-task.component.html',
  styleUrls: ['./comma-task.component.scss']
})
export class CommaTaskComponent implements TaskInputComponent, OnInit {

  @Input() task: SeparateTextTask;

  @Input() grading: SeparateTextFeedback;
  @Output() inputChange = new EventEmitter<SeparateTextInput>();

  words: SeparateTextWord[] = [];

  constructor() {
  }

  ngOnInit() {
    this.words = this.task.words.map(word => {
      return {text: word.text, separatorRight: SeparateTextSeparator.NONE, competence: word.competence};
    });
    this.inputChange.emit({
      type: StudentInputType.SEPARATE_TEXT,
      separatedWords: this.words
    });
  }

  onClickWord(index: number) {
    if (this.grading == null) {
      if (this.words[index].separatorRight === SeparateTextSeparator.COMMA) {
        this.words[index].separatorRight = SeparateTextSeparator.NONE;
      } else {
        this.words[index].separatorRight = SeparateTextSeparator.COMMA;
      }
      this.inputChange.emit({
        type: StudentInputType.SEPARATE_TEXT,
        separatedWords: this.words
      });
    }
  }

  getNgGradingClass(index: number) {
    if (this.grading != null) {
      return this.gradeStyle(index);
    }
  }

  gradeStyle(index: number) {
    if (this.grading != null) {
      const solutionSeparator = this.grading.solution[index].separatorRight;
      const studentSeparator = this.words[index].separatorRight;
      if (solutionSeparator === SeparateTextSeparator.OPTIONAL_COMMA) {
        return 'optional'
      } else if (studentSeparator === SeparateTextSeparator.COMMA && studentSeparator === solutionSeparator) {
        return 'correct';
      } else {
        if (studentSeparator !== solutionSeparator) {
          return 'wrong';
        } else {
          return null;
        }
      }
    }
  }

  get commaCursorNgClass() {
    if (this.grading == null) {
      return 'comma-cursor';
    }
  }

  isCommaSeparator(word: SeparateTextWord) {
    return word.separatorRight === SeparateTextSeparator.COMMA;
  }

  getTooltip(comp: string | null) {
    if (this.grading != null && comp != null) {
      return this.getCompetenceDescription(comp)
    }
  }

  getCompetenceDescription(comp: string) {
    return competences[comp].description;
  }

}