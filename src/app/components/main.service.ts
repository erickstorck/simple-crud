import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  get_vehicle() {
    console.log('get')
    return this.http.get<any[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
  }
}
