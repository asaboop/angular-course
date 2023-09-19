import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface tableapi{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  
  private _http=inject(HttpClient);

 
  getApi():Observable<tableapi[]>{
    return this._http.get<tableapi[]>('https://jsonplaceholder.typicode.com/todos/')
  }
}
