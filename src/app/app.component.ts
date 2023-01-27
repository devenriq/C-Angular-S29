import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  formulario!:FormGroup

  constructor( private formBuilder: FormBuilder, private router: Router ){
    this.formulario = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.formulario=this.formBuilder.group({
      email:['', [Validators.required, Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.minLength(6), Validators.required]]
    })
  }

  onSubmit(){
    const email = this.formulario.get('email')?.value
    const password = this.formulario.get('password')?.value
    if(this.formulario.valid){

      swal(`Email: ${email} ${'\n\n'} Password: ${password}`);

    }else if (!this.formulario.get('email')?.valid && !this.formulario.get('password')?.valid){
      swal(`Email "${email}" and password "${password}" are not valid`)
    }else if (!this.formulario.get('email')?.valid){
      swal(`Email "${email}" not valid`)
    }else if (!this.formulario.get('password')?.valid){
      swal(`Password "${password}" not valid`)
    }

  }

}
