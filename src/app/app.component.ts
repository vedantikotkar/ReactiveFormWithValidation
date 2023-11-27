import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'withValidations';
  loginform :any=FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.loginform=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]

    })
  }
  get form(){
    return this.loginform.controls;
  }
reset(){
  this.loginform.reset()
}
onSubmit(){
  this.submitted=true;
  if(this.form.valid){
    console.log("value",this.form.value);
    return;
  }
  console.log(this.loginform.value);
}

}
