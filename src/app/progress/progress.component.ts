import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  @Input() correct: number = 0;
  @Input() total: number = 1;

  get progressStyle() {
    return {
      width: `${this.barWidthInPercent}%`
    };
  }

  get barWidthInPercent() {
    return this.correct / this.total * 100;
  }

  get textPosition() {
    const offset = 20;
    const barWidthInPercent = this.barWidthInPercent;
    const writeOnFilled = barWidthInPercent > offset;
    const left = writeOnFilled
      ? barWidthInPercent / 2
      : barWidthInPercent + (100 - barWidthInPercent) / 2;
    return {left: `${left}%`}
  }

}