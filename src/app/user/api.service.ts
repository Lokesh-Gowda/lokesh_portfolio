import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // here we have to use post,get,put,delete method
  // Create user deatils using POST method 
  postUserDetails(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any) => {
      return res;
  }))
}

// Get customer details using GET method 
  getUserDetails(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }

  // Update user details using PUT method 
  putUserDetails(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Delete user details using DELETE method 
  deleteUserDetails(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

 

}

