import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class PatientService extends AbstractService {
  private hisURL: string;
  private paginationURL: string;

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.patient.baseURL;
    this.hisURL = environment.patient.hisURL;
    this.paginationURL = environment.patient.paginationURL;
  }

  getPatientsByHIS(his: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('system', his);
    return super.get(this.hisURL, options);
  }

  paginate(url: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('url', url);
    return super.get(this.paginationURL, options);
  }
}
