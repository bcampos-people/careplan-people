import { Response, RequestOptions, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';
import { HttpInterceptor, InterceptorConfig } from './http-interceptor';

export class CustomHttp extends HttpInterceptor {
  private loginURL = environment.baseURL + environment.login.baseURL;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions, new InterceptorConfig({ noTokenError: true }));
  }

  protected getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('smart_token');
      if (!token) {
        token = null;
      }
      resolve(token);
    });
  }

  protected saveToken(token: string): Promise<string> {
    return new Promise ((resolve, reject) => {
      localStorage.setItem('smart_token', token);
      resolve(token);
    });
  }

  protected refreshToken(): Observable<Response> {
    return super.post(this.loginURL, {}, null, true);
  }
}
