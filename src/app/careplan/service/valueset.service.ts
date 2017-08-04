import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';

@Injectable()
export class ValuesetService extends AbstractService {

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.valueset.baseURL;
  }

  addItemToValueset(system: string, code: string, display?: string, definition?: string): Observable<any> {
    const body = {
      'system': system,
      'code': code,
    };
    if (display) {
      body['display'] = display;
    }
    if (definition) {
      body['definition'] = definition;
    }
    return super.post(body);
  }
}
