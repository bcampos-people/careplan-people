import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import { environment } from './../../../environments/environment';
import 'rxjs/add/observable/of';

class ActivityCategoryService extends AbstractService {

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.activitycategory.baseURL;
  }

  get(): Observable<any> {
   // return super.get();
     return Observable.of(JSON.parse('{ \
       "id": "403", \
       "url": "rdsl:model:careplan:activity:category", \
       "name": "CarePlanActivityCategory", \
       "status": "active", \
       "description": null, \
       "values": [ \
           { \
               "id": null, \
               "system": "rdsl:model:careplan:activity:category", \
               "code": "medic", \
               "display": "Médica", \
               "definition": "Categoria de atividade prescrita por um médico.", \
               "unusable": false \
           } \
       ] \
     }'));
  }
}

@Injectable()
export class CareplanService extends AbstractService {
  private acService: ActivityCategoryService;
  private patientURL: string;
  private patientsURL: string;
  private paginationURL: string;

  constructor(protected http: Http) {
    super(http);
    this.acService = new ActivityCategoryService(http);
    this.baseURL = environment.baseURL + environment.careplan.baseURL;
    this.patientURL = environment.careplan.patientURL;
    this.patientsURL = environment.careplan.patientsURL;
    this.paginationURL = environment.careplan.paginationURL;
  }

  getById(id: string, full?: boolean): Observable<any> {
    // const options = new RequestOptions();
    // options.params = new URLSearchParams();
    // options.params.set('full', full.toString() || 'false');
    //return super.getForId(id, options);
    return Observable.of(JSON.parse('{ \
      "id": "6402", \
      "patientId": "Patient/405", \
      "status": "active", \
      "period": { \
          "startDate": "2017-06-27T19:30:51+00:00", \
          "endDate": "2017-06-30T00:00:00+00:00" \
      }, \
      "authorId": "Practitioner/407", \
      "modified": "2017-06-27T19:30:51+00:00", \
      "description": "Plano teste.", \
      "participants": ["Practitioner/408", "Practitioner/409"], \
      "goalIds": ["Goal/3952"], \
      "goals": [ \
          { \
              "id": "3952", \
              "statusDate": "2017-06-27T19:30:51+00:00", \
              "status": "in-progress", \
              "reason": "razao da meta", \
              "startDate": "2017-06-27T19:30:51+00:00", \
              "targetDate": "2017-06-30T00:00:00+00:00", \
              "category": "blood_pressure_reduction", \
              "priority": "high", \
              "description": "Redução de pressão sanguí­nea", \
              "patientId": "Patient/405", \
              "notes": "O paciente tem dificuldade para engolir, insistir nas medicações." \
          }], \
      "activities": [ \
          { \
                  "category": "medic", \
                  "type": "hidratacao", \
                  "status": "not-started", \
                  "statusReason": "Tenho dificuldades para engolir e por isso não consegui beber toda a água.", \
                  "scheduledPeriod": { \
                      "startDate": "2017-06-27T19:30:51+00:00", \
                      "endDate": "2017-06-27T19:30:51+00:00" \
                  }, \
                  "description": "Categoria de atividade prescrita por um médico.", \
                  "progress": "É muito importante que o paciente realize essa atividade.", \
                  "videoLink": "https://www.youtube.com/watch?v=e6bHAb0jpVI" \
          } \
      ], \
      "note": "Plano para teste de um paciente." \
    }'));
  }

  getByPatient(patientId: string, full?: boolean): Observable<any> {
    // const options = new RequestOptions();
    // options.params = new URLSearchParams();
    // options.params.set('full', full.toString() || 'false');
    // options.params.set('active', 'true');
    // return super.getForPatient(this.patientURL, patientId, options);
    return Observable.of(JSON.parse('{ \
      "dtoList": [ \
        { \
          "id": "6402", \
          "patientId": "Patient/405", \
          "status": "active", \
          "period": { \
              "startDate": "2017-06-27T19:30:51+00:00", \
              "endDate": "2017-06-30T00:00:00+00:00" \
          }, \
          "authorId": "Practitioner/407", \
          "modified": "2017-06-27T19:30:51+00:00", \
          "description": "Plano teste.", \
          "participants": ["Practitioner/408", "Practitioner/409"], \
          "goalIds": ["Goal/3952"], \
          "goals": [ \
            { \
                "id": "3952", \
                "statusDate": "2017-06-27T19:30:51+00:00", \
                "status": "in-progress", \
                "reason": "razao da meta", \
                "startDate": "2017-06-27T19:30:51+00:00", \
                "targetDate": "2017-06-30T00:00:00+00:00", \
                "category": "blood_pressure_reduction", \
                "priority": "high", \
                "description": "Redução de pressão sanguí­nea", \
                "patientId": "Patient/405", \
                "notes": "O paciente tem dificuldade para engolir, insistir nas medicações." \
            } \
          ], \
          "activities": [ \
            { \
                    "category": "medic", \
                    "type": "hidratacao", \
                    "status": "not-started", \
                    "statusReason": "Tenho dificuldades para engolir e por isso não consegui beber toda a água.", \
                    "scheduledPeriod": { \
                        "startDate": "2017-06-27T19:30:51+00:00", \
                        "endDate": "2017-06-27T19:30:51+00:00" \
                    }, \
                    "description": "Categoria de atividade prescrita por um médico.", \
                    "progress": "É muito importante que o paciente realize essa atividade.", \
                    "videoLink": "https://www.youtube.com/watch?v=e6bHAb0jpVI" \
            } \
          ], \
          "note": "Plano para teste de um paciente." \
        } \
      ], \
      "urlSelf": "patient=21880", \
      "urlPrevious": null, \
      "urlNext": null, \
      "total": 1 \
    }'));
  }

  getByPatients(patientIds: string[], full?: string): Observable<any> {
    //const options = new RequestOptions();
    // options.params = new URLSearchParams();
    // options.params.set('full', full || 'false');
    // options.params.set('patientIds', patientIds.toString());
    //return super.get(this.patientsURL, options);
    return Observable.of(JSON.parse('[ \
      { \
        "id": "6402", \
        "patientId": "Patient/405", \
        "status": "active", \
        "period": { \
            "startDate": "2017-06-27T19:30:51+00:00", \
            "endDate": "2017-06-30T00:00:00+00:00" \
        }, \
        "authorId": "Practitioner/407", \
        "modified": "2017-06-27T19:30:51+00:00", \
        "description": "Plano teste.", \
        "participants": ["Practitioner/408", "Practitioner/409"], \
        "goalIds": ["Goal/3952"], \
        "goals": [ \
            { \
                "id": "3952", \
                "statusDate": "2017-06-27T19:30:51+00:00", \
                "status": "in-progress", \
                "reason": "razao da meta", \
                "startDate": "2017-06-27T19:30:51+00:00", \
                "targetDate": "2017-06-30T00:00:00+00:00", \
                "category": "blood_pressure_reduction", \
                "priority": "high", \
                "description": "Redução de pressão sanguí­nea", \
                "patientId": "Patient/405", \
                "notes": "O paciente tem dificuldade para engolir, insistir nas medicações." \
            }], \
        "activities": [ \
            { \
                    "category": "medic", \
                    "type": "hidratacao", \
                    "status": "not-started", \
                    "statusReason": "Tenho dificuldades para engolir e por isso não consegui beber toda a água.", \
                    "scheduledPeriod": { \
                        "startDate": "2017-06-27T19:30:51+00:00", \
                        "endDate": "2017-06-27T19:30:51+00:00" \
                    }, \
                    "description": "Categoria de atividade prescrita por um médico.", \
                    "progress": "É muito importante que o paciente realize essa atividade.", \
                    "videoLink": "https://www.youtube.com/watch?v=e6bHAb0jpVI" \
            } \
        ], \
        "note": "Plano para teste de um paciente." \
      } \
    ]'));
  }

  getActivityCategories(): Observable<any> {
    //return this.acService.get();
    return Observable.of(JSON.parse('{ \
      "id": "403", \
      "url": "rdsl:model:careplan:activity:category", \
      "name": "CarePlanActivityCategory", \
      "status": "active", \
      "description": null, \
      "values": [ \
          { \
              "id": null, \
              "system": "rdsl:model:careplan:activity:category", \
              "code": "medic", \
              "display": "Médica", \
              "definition": "Categoria de atividade prescrita por um médico.", \
              "unusable": false \
          } \
      ] \
    }'));
  }

  /**
   * O método update sobrescreve TODOS os dados de um plano de cuidados. Ou seja, se um dado está com valor null, o servidor inserirá null
   * nesse valor.
   * @param {*} plan O plano a ser atualizado.
   * @returns {Observable<any>} O id do plano atualizado.
   * @memberof CareplanService
   */
  update(plan: any): Observable<any> {
    return super.put(plan.id, plan);
  }
}
