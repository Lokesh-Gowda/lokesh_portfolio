import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../user/api.service';
import { UserData } from './main-content.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  formValue!: FormGroup;
  userDetailsObject: UserData = new UserData;
  allUserData: any;
  showAdd! : boolean;
  showEdit! : boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      name:  new FormControl(null,[Validators.pattern('[a-z,A-Z]{4,}'),Validators.required]),
      coname:  new FormControl(null,[Validators.pattern('[a-z,A-Z]{3,}'),Validators.required]),
      mobile: new FormControl(null,[Validators.pattern('[6-9][0-9]{9}'),Validators.required]),
      email: new FormControl(null,[Validators.pattern('[a-z][a-z,0-9]{3,15}[@][a-z]{5}[.][a-z]{3}'),Validators.required]),
     
      feedback: ['']
    })

    this.getAllData()

  }
  clickAddedDetail(){
    this.formValue.reset();
    this.showAdd=true;
    this.showEdit=false;
  }
  // Now subscribing our data which is maped via Service 
  addDetails() {
    this.userDetailsObject.name =
      this.formValue.value.name;
    this.userDetailsObject.coname =
      this.formValue.value.coname;
    this.userDetailsObject.mobile =
      this.formValue.value.mobile;
    this.userDetailsObject.email =
      this.formValue.value.email;
    this.userDetailsObject.feedback = this.formValue.value.feedback;

    this.api.postUserDetails(this.userDetailsObject).subscribe(res => {
      console.log(res);
      alert("User Details Added Successfully");
      // clear fill form details
      let ref = document.getElementById("clear");
      ref?.click();
      this.formValue.reset();
      this.getAllData(); 
    },
      _err => {
        alert("Please Enter Valid Details")

      }
    )
  }

  // Get all data
  getAllData() {
    this.api.getUserDetails().subscribe(res => {
      this.allUserData = res;
    })
  }

  // Delete records
  deleteDetails(data:any){
    this.api.deleteUserDetails(data.id).subscribe(_res=>{
alert("User Details Deleted.")
// quick refresh data 
this.getAllData();  
    })
  }

  // edit user details
  onEditeDetails(data:any){
    this.showAdd= false;
    this.showEdit= true;

    this.userDetailsObject.id = data.id;

    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['coname'].setValue(data.coname);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['feedback'].setValue(data.feedback);

  }

  // Update details 
  updateDetails(){
    this.userDetailsObject.name = this.formValue.value.name;
    this.userDetailsObject.coname = this.formValue.value.coname;
    this.userDetailsObject.mobile = this.formValue.value.mobile;
    this.userDetailsObject.email = this.formValue.value.email;
    this.userDetailsObject.feedback = this.formValue.value.feedback;

    this.api.putUserDetails(this.userDetailsObject,this.userDetailsObject.id).subscribe(_res=>{
      alert("User Details Updated");

      let ref = document.getElementById("clear");
      ref?.click();
      this.formValue.reset();
      this.getAllData(); 
    })
  }

}
