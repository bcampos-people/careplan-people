import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import 'rxjs/add/observable/of';

@Injectable()
export class GoalService extends AbstractService {
  private categoryURL: string;
  private priorityURL: string;
  private statusURL: string;

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.goal.baseURL;
    this.categoryURL = environment.goal.categoryURL;
    this.priorityURL = environment.goal.priorityURL;
    this.statusURL = environment.goal.statusURL;
  }

  getGoals(planId: string): Observable<any> {
    //return super.getForCarePlan(planId);
    return Observable.of(JSON.parse(' \
      { \
        "dtoList": [ \
          { \
            "id": "410", \
            "statusDate": null, \
            "status": "in-progress", \
            "reason": null, \
            "startDate": null, \
            "targetDate": null, \
            "category": "blood_pressure_reduction", \
            "priority": null, \
            "description": "Reduzir a pressão sanguínea.", \
            "patientId": "Patient/405", \
            "notes": null \
          } \
        ] \
      }'));
  }

  getCategories(): Observable<any> {
    //return super.get(this.categoryURL);
    return Observable.of(JSON.parse(' \
      { \
        "id": "404", \
        "url": "rdsl:model:goal:category", \
        "name": "GoalCategory", \
        "status": "active", \
        "description": null, \
        "values": [ \
          { \
            "id": null, \
            "system": "rdsl:model:goal:category", \
            "code": "blood_pressure_reduction", \
            "display": "Redução de pressão sanguí\u00adnea", \
            "definition": "Reduzir a pressão sanguí\u00adnea.", \
            "unusable": false \
          } \
        ] \
      }'));
  }

  getPriorities(): Observable<any> {
    //return super.get(this.priorityURL);
    return Observable.of(JSON.parse(' \
      [ \
        "HIGH", \
        "MEDIUM", \
        "LOW" \
      ]'));
  }

  getStatuses(): Observable<any> {
    //return super.get(this.statusURL);
    return Observable.of(JSON.parse(' \
      [ \
        "PROPOSED", \
        "PLANNED", \
        "ACCEPTED", \
        "REJECTED", \
        "IN_PROGRESS", \
        "ACHIEVED", \
        "SUSTAINING", \
        "ON_HOLD", \
        "CANCELLED" \
      ]'));
  }

  /**
   * Cria uma nova meta no servidor.
   *
   * @param {*} goal A meta a ser criada.
   * @returns {Observable<any>} O id da meta criada.
   * @memberof GoalService
   */
  createGoal(goal: any): Observable<any> {
    return super.post(goal);
  }
}
