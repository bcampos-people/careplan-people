import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import 'rxjs/add/observable/of';

@Injectable()
export class CommunicationService extends AbstractService {
  private paginationURL: string;

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.communication.baseURL;
    this.paginationURL = environment.communication.paginationURL;
  }

  get(): Observable<any> {
    //return super.get();
    return Observable.of(JSON.parse(' \
      { \
        "dtoList": [ \
          { \
            "id": "6404", \
            "sent": { \
                "dateTime": 1498591851 \
            }, \
            "content": "Exija que lavem as mãos antes de cuidar de você." \
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
