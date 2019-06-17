import { Component, OnInit, Input } from '@angular/core';

import {Task} from '../models';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {

  @Input() task: Task;

}