import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
 * @param form
 */
function passWordMatch(form:any){
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword')
  if(password.value !== confirmPassword.value)
  {
    confirmPassword.setErrors({passWordMatch:true})
  }
  else
  {
    confirmPassword.setErrors(null)
  }
  return null
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerForm:FormGroup
  constructor(private build:FormBuilder) { 
    this.registerForm= this.build.group({
      name:["", Validators.required],
      email:["", [Validators.required,gmailValidator]],
      username:["",[Validators.required]],
      password:["", [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: "",
    }, {
      validators:passWordMatch  
    })
    
  }
  register(){
    console.log(this.registerForm)
  }
 
  
}
function gmailValidator(formControl : FormControl){
  if(formControl.value.includes("@gmail.com"))
  {
      return null;
  }
  return {gmail:true};

}
function symbolValidator(control: FormControl){ // control=formRegister.get('password')
  if(control.hasError('required')) return null;
  if(control.hasError('minLength')) return null;
  if( control.value.indexOf('d') > -1)
  {
    return null
  }
  else {
    return {symbol:true}
  }
}