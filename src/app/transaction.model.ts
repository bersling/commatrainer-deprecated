import {Task, GradingFeedback, StudentInput} from './models';

export interface Transaction {
 task: Task;
 input: StudentInput;
 grading: GradingFeedback
}