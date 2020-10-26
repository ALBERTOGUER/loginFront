import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDServiceService } from '../../services/crudservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;
  private regexemail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  private regexpassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\_\*])(?=.{8,})/;
  private data: {};

  constructor(private service:CRUDServiceService, private router:Router) { }

  ngOnInit() {
    this.crearFormulario();
  }

  public crearFormulario(): void {
    this.formulario = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.pattern(this.regexemail)]),
      contraseña: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(this.regexpassword)]),
    })
  }

  public loginservicecall(){
  
    console.log(this.formulario.value)

    let body = this.formulario.value

    this.service.loginUser(body).subscribe((data) => {
      console.log(data,"prueba");
      this.router.navigate(['home'])

    }, (error) => {
      console.log(error);
     

    })


  }
  

}
