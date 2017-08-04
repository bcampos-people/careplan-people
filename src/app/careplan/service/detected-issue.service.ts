import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import 'rxjs/add/observable/of';

@Injectable()
export class DetectedIssueService extends AbstractService {
  private paginationURL: string;
  private patientURL: string;

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.detectedissue.baseURL;
    this.paginationURL = environment.detectedissue.paginationURL;
    this.patientURL = environment.allergy.patientURL;
  }

  getByPatient(patientId: string): Observable<any> {
    //return super.getForPatient(this.patientURL, patientId);
    return Observable.of(JSON.parse(' \
      { \
        "dtoList": [ \
          { \
            "id": "6405", \
            "detail": "Possibilidade de queda.", \
            "date": { \
                "dateTime": 1498591851 \
            }, \
            "patientId": "Patient/405", \
            "authorId": "Practitioner/407" \
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
}
