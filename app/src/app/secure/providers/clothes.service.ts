import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

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
  
  getClothes(): Promise<any> {
    return this.http.get('/api/clothes/getAll', this.getHeaders())
    .toPromise();
  }

  insertClothes(item: any): Promise<any> {
    return this.http.put('/api/clothes/insert', item, this.getHeaders())
    .toPromise();
  }

  updateClothes(item: any): Promise<any> {
    return this.http.post('/api/clothes/update', item, this.getHeaders())
    .toPromise();
  }

  deleteClothes(item: any): Promise<any> {
    return this.http.delete(`/api/clothes/delete/${item._id}`, this.getHeaders())
    .toPromise();
  }

}
