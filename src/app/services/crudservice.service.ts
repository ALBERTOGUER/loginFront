import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CRUDServiceService {

  constructor(private http:HttpClient) { }

  public loginUser(body){

    let url = `http://localhost:5000/log`
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    console.log(body);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200')
    headers.append('Content-Type','application/json; charset=utf-8')
    
    return this.http.post(url,body, {headers: headers})
  }

}
