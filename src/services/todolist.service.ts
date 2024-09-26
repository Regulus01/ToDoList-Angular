import { Injectable } from '@angular/core';
import { enviroment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPaginatedTasks } from '../app/models/interfaces/GetPaginatedTasks';

@Injectable({
  providedIn: 'root',
})

export class TodolistService {
  private API_URL = enviroment.API_URL;
  private httpOptions: object | undefined;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
  }

  getPaginatedTasks(skip : number, take : number) : Observable<GetPaginatedTasks> {
    var response = this.http.get<GetPaginatedTasks>(`${this.API_URL}/TaskList/${skip}/${take}`, this.httpOptions)

    return response;
  }
}
