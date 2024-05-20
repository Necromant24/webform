import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  httpClient: HttpClient 
  baseUrl: string

  data: IIncidient = {
    TP : "",
    Degradation : "",
    Description : "",
    Actions : "",
    Date : "",
  }


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.httpClient = http
    this.baseUrl = baseUrl
  }



  onFormInput(name: string, e: any){

    let val = e.target.value
    // @ts-ignore
    this.data[name] = val
  }

  send(){

    this.httpClient.post<IIncidient>(this.baseUrl + 'incidient', this.data).subscribe(res=>{
      console.log('ok?', res)
    }, err => {
      console.log(err)
    })
  }


}



export interface IIncidient {
  TP: string
  Degradation: string
  Description: string
  Actions: string
  Date: string
}
