import { Injectable } from '@angular/core';
import {Banco} from "./banco";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BancoService {


  constructor(
    private http: HttpClient
  ) { }

  listarBancos(): Observable<Banco[]>{
    return this.http.get<Banco[]>("http://localhost:8092/rest/bancos");
  }
}
