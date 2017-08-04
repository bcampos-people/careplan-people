import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginService extends AbstractService {
  private meURL = environment.baseURL + environment.login.meURL;

  constructor(protected http: Http) {
    super(http);
  }

  me(): Observable<any> {
    //return this.http.get(this.meURL).map(this.extractData).catch(this.handleError);
    return Observable.of (JSON.parse('{ \
      "patient": { \
        "id": "405", \
        "name": "JOSE SILVA", \
        "birthDate": { \
            "dateTime": 330577200 \
        }, \
        "email": "<Não informado>", \
        "mobilePhone": "<Não informado>", \
        "photo": null, \
        "login": "<Não informado>", \
        "cpf": "00000000000" \
      }, \
      "room": "Quarto 303" \
    }'));
  }
}
