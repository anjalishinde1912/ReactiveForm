import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray, FormGroup, AbstractControl, Validators,FormBuilder, FormControlDirective } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
register!: FormGroup;
address!: FormGroup;
fb!: FormBuilder;

  constructor (fb: FormBuilder)  {
  this.register = fb.group({
    name : [null, Validators.required],
    lastname : [null, Validators.required],
    gender: [null],
    email: [null, [Validators.required, Validators.email]],
    date: [null,Validators.required],
    password:[null,[Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    message: [null,[Validators.required, Validators.minLength(10)]],
    agree: [false, Validators.requiredTrue],
    address:new FormGroup({
    city: new FormControl(null, [Validators.required]),
    street: new FormControl(null, [Validators.required]),
    pincode:new FormControl(null, [Validators.required])
  }),
  skills: fb.array([
  ]),
  Interest:[this.put()]
});
}

get city (): any {
  return this.register.get('city') as FormControl;
}

get street () {
  return this.register.get('street') as FormControl;
}

get pincode () {
  return this.register.get('pincode') as FormControl;
}

get skills() {
  return this.register.get('skills') as FormArray;
}

addskills() {
  this.skills.push(new FormControl());
}

get lastname () {
  return this.register.get('lastname') as FormControl;
}

get gender () {
  return this.register.get('gender') as FormControl;
}

get name () {
  return this.register.get('name') as FormControl;
}

get email () {
  return this.register.get('email') as FormControl;
}

get date () {
  return this.register.get('date') as FormControl;
}

get password () {
  return this.register.get('password') as FormControl;
}


get message () {
  return this.register.get('message') as FormControl;
}

get agree () {
  return this.register.get('agree') as FormControl;
}

send () {
  console.log(this.register.value)
  localStorage.setItem( this.register.value.email, JSON.stringify(this.register.value));
}

reset () {
  this.register.reset
}

options = ['HTML', 'CSS', 'Angular', 'javascript', 'SCSS']
selected = [] as any
  
onChange( item: any) {
    if(this.selected.indexOf(item) == -1){
    this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }
  
  put() {
     return this.selected;
  }

  get Interest () {
    return this.register.get('Interest') as FormControl;
  }

ngOnInit () {
}

}
