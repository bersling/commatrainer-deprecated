import { Component, Input, OnInit } from '@angular/core';
import {CompetenceService, CompetenceData} from './competence.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  competences;

  constructor(
    private competenceService: CompetenceService,
    private keyValuePipe: KeyValuePipe
  ) {}

  ngOnInit() {
    this.competenceService.competences.subscribe(next => {
      const competenceArray  = this.keyValuePipe.transform(next);
      this.competences = competenceArray
        .sort((a, b) => this.competenceService.ratioCorrect(a.value)
          - this.competenceService.ratioCorrect(b.value));
    });
  }

  competenceExists(id: string) {
    return this.competenceService.getCompetence(id) != null;
  }

  getDescription(id: string) {
    return this.competenceService.getCompetence(id).description;
  }

}

