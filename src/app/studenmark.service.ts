import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudenmarkService {
  
  
  constructor(private _http:HttpClient) { }

  postMarks(data:any){

    return this._http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
      return res;
    }))


  }

  getMarks(){

    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{

    return res;
    }))
  }

 
    updateMarksheet(data:any,id:number){

    return this._http.put<any>(`http://localhost:3000/posts/${id}`,data).pipe(map((res:any)=>{

    return res;


    }))

  }

  deleteMark(id:number)
  {
    return this._http.delete<any>(`http://localhost:3000/posts/${id}`).pipe(map((res:any)=>{
    return res;
    }))
  }

}

