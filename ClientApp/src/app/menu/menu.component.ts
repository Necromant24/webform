import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  http: HttpClient
  baseUrl: string

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http
    this.baseUrl = baseUrl
  }


  loadReport(){
    this.http.get<any>(this.baseUrl + 'report').subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

}
