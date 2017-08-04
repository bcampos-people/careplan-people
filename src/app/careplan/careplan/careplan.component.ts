import { PatientService } from './../service/patient.service';
import { AppComponent } from './../../app.component';
import { GoalService } from './../service/goal.service';
import { environment } from './../../../environments/environment';
import { CommunicationService } from './../service/communication.service';
import { DetectedIssueService } from './../service/detected-issue.service';
import { AllergyService } from './../service/allergy.service';
import { CareplanService } from './../service/careplan.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
// const kafka = require('node-rdkafka');
// const kafka = require('kafka-node'),
//     Consumer = kafka.Consumer,
//     client = new kafka.Client(),
//     consumer = new Consumer(
//         client,
//         [
//             { topic: 'careplan-148407' }, { topic: 'patient-21880' }
//         ],
//         {}
//     );

@Component({
  selector: 'app-careplan',
  templateUrl: './careplan.component.html',
  styleUrls: ['./careplan.component.css'],
  providers: [AllergyService, CareplanService, CommunicationService, DetectedIssueService, GoalService, PatientService]
})
export class CareplanComponent implements OnInit {
  private allergySubs: any;
  private goalCats: any;
  private location: Location;
  private consumer: any;
  myPatient: any;
  myRoom: string;
  myPlan: any;
  myAllergies: any;
  myIssues: any;
  allergyCategories: any;
  allergyCriticalities: any;
  allergySubstances: any;
  activityCategories: any;
  communications: any;
  goalCategories: any;
  goalPriorities: any;
  goalStatuses: any;
  patients: any;
  plans: any;

  constructor(private route: ActivatedRoute, private allergyService: AllergyService, private cpService:
  CareplanService, private commService: CommunicationService, private issueService: DetectedIssueService,
  private goalService: GoalService, private ptService: PatientService, private router: Router) { }

  ngOnInit() {
    const lastOk: number = parseInt(localStorage.getItem('lastOkForIssues'), 10);
    if (isNaN(lastOk) || AppComponent.didOneDayPass(lastOk)) {
      this.router.navigate(['/issues']);
    }
    const me: any = JSON.parse(localStorage.getItem('patient'));
    this.myPatient = me.patient;
    this.myRoom = me.room;
    this.cpService.getByPatient(this.myPatient.id, true).subscribe(plan => this.loadPlan(plan));
  }

  loadPlan(plan: any) {
    if (plan && plan.dtoList && plan.dtoList[0] && plan.dtoList[0].id) {
      this.myPlan = plan.dtoList[0];
      this.allergyService.getAllergies(this.myPlan.patientId).subscribe(allergies => this.myAllergies = allergies);
      this.issueService.getByPatient(this.myPlan.patientId).subscribe(issues => this.myIssues = issues);
      this.commService.get().subscribe(comms => this.communications = comms);
      this.allergyService.getCategories().subscribe(categories => this.allergyCategories = categories);
      this.allergyService.getCriticalities().subscribe(crits => this.allergyCriticalities = crits);
      this.allergyService.getSubstances().subscribe(subs => this.readAllergySubstances(subs));
      this.cpService.getActivityCategories().subscribe(categories => this.activityCategories = categories);
      this.goalService.getCategories().subscribe(categories => this.readGoalCategories(categories));
      this.goalService.getPriorities().subscribe(priorities => this.goalPriorities = priorities);
      this.goalService.getStatuses().subscribe(statuses => this.goalStatuses = statuses);
      
      // this.ptService.getPatientsByHIS('source:mv').subscribe(patients => {
      //   this.patients = patients;
      //   this.getCarePlansForPatients();
      // });



      // const kafkaGlobal = environment.kafka;
      // kafkaGlobal['group.id'] = 'patient-' + this.myPlan.patientId;
      // kafkaGlobal['error_cb'] = function(error) {console.error(error)};
      // this.consumer = new kafka.KafkaConsumer(kafkaGlobal, {});
    //   consumer.on('message', function (message) {
    //     console.log(message);
    //   });
    } else {
      this.router.navigate(['/nocareplan']);
    }
  }

  readAllergySubstances(subs: any) {
    if (subs) {
      this.allergySubs = subs;
      this.allergySubstances = subs.values;
    }
  }

  readGoalCategories(categories: any) {
    if (categories) {
      this.goalCats = categories;
      this.goalCategories = categories.values;
    }
  }

  getCarePlansForPatients() {
    const patients = this.patients.dtoList;
    const ids = [];
    for (let i = 0; i < patients.length; i++) {
      ids[i] = patients[i].id;
    }
    this.cpService.getByPatients(ids, 'true').subscribe(plans => {
      this.plans = plans;
    });
  }
}
