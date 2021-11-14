import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(
        private http: HttpClient,
        public router: Router
    ) { }

    get_brands() {
        return this.http.get<any[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
    }

    get_models(cod) {
        return this.http.get<any[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${cod}/modelos`)
    }

}
