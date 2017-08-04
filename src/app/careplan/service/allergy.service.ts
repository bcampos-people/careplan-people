import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import 'rxjs/add/observable/of';

@Injectable()
export class AllergyService extends AbstractService {
  private paginationURL: string;
  private categoryURL: string;
  private criticalityURL: string;
  private patientURL: string;
  private substanceURL: string;

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.allergy.baseURL;
    this.paginationURL = environment.allergy.paginationURL;
    this.categoryURL = environment.allergy.categoryURL;
    this.criticalityURL = environment.allergy.criticalityURL;
    this.patientURL = environment.allergy.patientURL;
    this.substanceURL = environment.allergy.substanceURL;
  }

  getAllergies(patientId: string): Observable<any> {
    //return super.getForPatient(this.patientURL, patientId);
    return Observable.of(JSON.parse(' \
      { \
        "dtoList": [ \
          { \
            "id": "6403", \
            "substance": "diclofenaco", \
            "category": "MEDICATION", \
            "criticality": "HIGH_RISK", \
            "recordedDate": null, \
            "reporterId": null, \
            "note": null, \
            "patientId": "Patient/405" \
          } \
        ], \
        "urlSelf": "patient=405", \
        "urlPrevious": null, \
        "urlNext": null, \
        "total": 0 \
      }'));
  }

  paginate(url: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('url', url);
    return super.get(this.paginationURL, options);
  }

  getCategories(): Observable<any> {
    //return super.get(this.categoryURL);
    return Observable.of(JSON.parse('[ \
      "FOOD", \
      "MEDICATION", \
      "ENVIRONMENT", \
      "OTHER" \
    ]'));
  }

  getCriticalities(): Observable<any> {
    //return super.get(this.criticalityURL);
    return Observable.of(JSON.parse('[ \
      "LOW_RISK", \
      "HIGH_RISK", \
      "UNABLE_TO_DETERMINE" \
    ]'));
  }

  getSubstances(): Observable<any> {
    //return super.get(this.substanceURL);
    return Observable.of(JSON.parse('\
      { \
          "id": "3067", \
          "url": "rdsl:model:allergyintolerance:substance", \
          "name": "AllergyIntoleranceSubstance", \
          "status": "active", \
          "description": null, \
          "values": [ \
              { \
                  "id": null, \
                  "system": "rdsl:model:allergyintolerance:substance", \
                  "code": "diclofenaco", \
                  "display": "Diclofenaco", \
                  "definition": "Alergia à substância diclofenaco.", \
                  "unusable": false \
              } \
          ] \
      } \
    '));
  }
}
