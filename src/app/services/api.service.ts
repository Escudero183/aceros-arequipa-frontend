import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPathApi = 'http://63.250.41.142:8080/';
  private contextApi = 'api-acerosarequipa';
  public pathMultimedia = `${this.urlPathApi}${this.contextApi}/api/v1/multimedia`;

  constructor(private http: HttpClient) { }

  public getWorkers (params : any) : Observable<any> {
    const service = '/api/v1/administration/worker';
    const query = `?position=${params.position}&query=${params.query}`
    return this.http.get<any>(`${this.urlPathApi}${this.contextApi}${service}${query}`);
  }

  public getRequests (params : any) : Observable<any> {
    const service = '/api/v1/manage-requirements/request';
    const query = `?status=${params.status}&query=${params.query}`
    return this.http.get<any>(`${this.urlPathApi}${this.contextApi}${service}${query}`);
  }

  public saveRequest (data:any) : Observable<any> {
    const service = '/api/v1/manage-requirements/request';

    const payload = new FormData()
    payload.append('title', data.title)
    payload.append('description', data.description)
    payload.append('idWorker', data.idWorker)
    payload.append('file', data.anexx)

    return this.http.post<any>(`${this.urlPathApi}${this.contextApi}${service}`, payload);
  }
}
