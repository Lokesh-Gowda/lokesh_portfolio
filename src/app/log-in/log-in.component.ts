import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null,[Validators.pattern('[a-z][a-z]{3,10}[@][a-z]{5}[.][a-z]{3}'),Validators.required]),
      password: new FormControl(null,[Validators.maxLength(12), Validators.minLength(8), Validators.required])
    })
  }
  // login method define
  logIn() {
    this.http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Login is Successful");
        this.loginForm.reset();
        this.router.navigate(['header']);
        this.router.navigate(['home']); 
      } else {
        alert("User Not Found!");
      }
    }, _err => {
      alert("Server Error!")
    })
  }

}
