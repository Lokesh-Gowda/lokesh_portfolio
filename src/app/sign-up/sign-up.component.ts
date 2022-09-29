import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:  new FormControl(null,[Validators.pattern('[a-z]{4,}'),Validators.required]),
      mobile: new FormControl(null,[Validators.pattern('[6-9][0-9]{9}'),Validators.required]),
      email: new FormControl(null,[Validators.pattern('[a-z][a-z]{3,10}[@][a-z]{5}[.][a-z]{3}'),Validators.required]),
      password: new FormControl(null,[Validators.maxLength(12), Validators.minLength(8), Validators.required])
    })
  }

  // Make a method to create User

  signUp(){
    this.http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(_res=>{
      alert("Registration done Successfully..");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, _err=>{
      alert("Something Went Wrong! Please try again..")
    })
    
  }




}


