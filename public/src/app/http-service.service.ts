import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private _http: HttpClient, private _router: Router) {
    //  fix
  }
}
