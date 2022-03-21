import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { }
@Injectable({
  providedIn: 'root'
})
export class CanvasServiceService {

  constructor(private _http: HttpClient, private _router: Router) { }
}
