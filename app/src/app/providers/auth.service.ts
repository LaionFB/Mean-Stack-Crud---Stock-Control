import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  private getHeaders(): any{
    return {
      headers: {
        'Content-Type': 'application/json',
        'responseType': 'text',
        'x-access-token': localStorage.getItem('jwt')
      }
    };
  }

  login(entity: any): Promise<any> {
    return this.http.post('/api/account/login', entity, this.getHeaders())
    .toPromise()
    .then(data => { localStorage.setItem('jwt', (data as any).token); localStorage.setItem('username', (data as any).username); });
  }

  register(entity: any): Promise<any> {
    return this.http.put('/api/account/register', entity, this.getHeaders())
    .toPromise();
  }

  checkSession(): any {
    return this.http.get('/api/account/checkAuth', this.getHeaders())
    .toPromise();
  }
}
