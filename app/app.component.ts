import { Component } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6Proj';

  pos = 'HL(0,1)';


  constructor(private http: HttpClient){}

  ngOnInit() {

  }
  
    getRequest(url: string, params ? : any): Observable < any > {
    return this.http.get(url, params);
  }

  postRequest(url: string, request ? : any, params ? : any): Observable < any > {
  
    let req = JSON.stringify(request) ? JSON.stringify(request) : '';
     return this.http.post(url, req, this.commonHttpHeaders());
  }
}
