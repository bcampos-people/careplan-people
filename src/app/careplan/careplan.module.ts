import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareplanComponent } from './careplan/careplan.component';
import { NocareplanComponent } from './nocareplan/nocareplan.component';
import { IssuesComponent } from './issues/issues.component';

import { CareplanService } from './service/careplan.service';
import { AllergyService } from './service/allergy.service';
import { LoginService } from './service/login.service';
import { DetectedIssueService } from './service/detected-issue.service';
import { CommunicationService } from './service/communication.service';
import { ValuesetService } from './service/valueset.service';

import { GoalService } from './service/goal.service';

import { PatientService } from './service/patient.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CareplanComponent,
    NocareplanComponent,
    IssuesComponent
  ],
  providers: [
    AllergyService,
    CareplanService,
    CommunicationService,
    DetectedIssueService,
    GoalService,
    LoginService,
    PatientService,
    ValuesetService
  ]
})
export class CareplanModule { }
