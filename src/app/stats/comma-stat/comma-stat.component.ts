import { Component, OnInit, Input } from '@angular/core';
import { SeparateTextTask, SeparateTextFeedback, SeparateTextInput, SeparateTextWord, SeparateTextSeparator } from '../../models';
import { CommaMapperService } from '../../comma/comma-mapper.service';

@Component({
  selector: 'app-comma-stat',
  templateUrl: './comma-stat.component.html',
  styleUrls: ['./comma-stat.component.scss']
})
export class CommaStatComponent implements OnInit {

  @Input() grading: SeparateTextFeedback;
  @Input() input: SeparateTextInput;

  words: SeparateTextWord[] = [];

  constructor(
    private commaMapperService: CommaMapperService
  ) { }

  ngOnInit() {
    this.words = this.input.separatedWords;
  }

  getNgGradingClass(index: number) {
    if (this.grading != null) {
      return this.gradeStyle(index);
    }
  }

  // TODO: this is duplicated, don't do this...
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

  // TODO: this is duplicated, don't do this...
  isCommaSeparator(word: SeparateTextWord) {
    return word.separatorRight === SeparateTextSeparator.COMMA;
  }


}