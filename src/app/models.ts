import {EventEmitter} from '@angular/core';

export interface TaskInputComponent {
  task?: Task;
  grading: GradingFeedback | null;
  input?: StudentInput | null;
  inputChange: EventEmitter<StudentInput>;
}

export enum Correctness {
  CORRECT = 'CORRECT',
  PARTIAL = 'PARTIAL',
  WRONG = 'WRONG'
}

export enum StudentInputType {
  SEPARATE_TEXT = 'SEPARATE_TEXT'
}

export interface CommaFeedback {
  solution: SeparateTextWord[];
}

export enum TaskType {
  COMMA = 'COMMA'
}

export interface Task {
  id: string;
  type: TaskType;
  // competence: string;
  // feedback?: string;
}

export interface SeparateTextTask extends Task {
  words: SeparateTextWord[];
}

export enum SeparateTextSeparator {
  NONE = 'NONE',
  COMMA = 'COMMA',
  OPTIONAL_COMMA = 'OPTIONAL_COMMA'
}

export interface SeparateTextWord {
  separatorRight: SeparateTextSeparator;
  text: string;
  competence?: string;
}

export interface StudentInput {
  type: StudentInputType;
}

export interface SeparateTextInput extends StudentInput {
  separatedWords: SeparateTextWord[];
  type: StudentInputType;
}

export interface GradingFeedback {
  correct: Correctness;
  solution: any;
}

export interface SeparateTextFeedback extends GradingFeedback {
  solution: SeparateTextWord[];
}
