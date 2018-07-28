import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {
  }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl);
    // return Observable.create(this._albumUrl);
  }
}

