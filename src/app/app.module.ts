import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {KeyValuePipe} from '@angular/common';

import { AppComponent } from './app.component';
import { CommaTaskComponent } from './comma/comma-task.component';
import { CommaMapperService } from './comma/comma-mapper.service';
import { TaskStoreService } from './task-store.service';
import { TaskComponent } from './task/task.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProgressComponent } from './progress/progress.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { CompetenceService } from './competences/competence.service';
import { GradingService } from './grading.service';
import { CleanPipe } from './clean.pipe';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { CommaStatComponent } from './stats/comma-stat/comma-stat.component';
import {MatIconModule} from '@angular/material/icon';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RecommenderService } from './recommender.service';
import { PersistenceService } from './persistence.service';
import { SheetService } from './sheet.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip'; 

@NgModule({
  imports:      [ MatTooltipModule, BrowserModule, FormsModule, MatIconModule, NoopAnimationsModule, HttpClientModule ],
  declarations: [ AppComponent, CommaTaskComponent, TaskComponent, InstructionsComponent, CompetencesComponent, ProgressComponent, JumboComponent, CleanPipe, FooterComponent, StatsComponent, CommaStatComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CommaMapperService, TaskStoreService, CompetenceService, GradingService, RecommenderService, PersistenceService, KeyValuePipe, SheetService]
})
export class AppModule { }
