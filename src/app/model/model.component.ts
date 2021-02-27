import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  //CREAR FORMULARIO
  formulario:FormGroup;

  //MENSAJE PARA CAMPOS INVALIDOS
  mensaje:string='Campo Invalido';

  //DECLARAR CAMPOS DEL FORMULARIO
  constructor(){
    this.formulario= new FormGroup({

      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('',[
        Validators.required
      ]),
      edad: new FormControl('',[
        Validators.required,
        this.validadEdad
      ]),
      dni: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/(\w+([-+.']\w+)*@(gmail.com))/)
      ]),
      password: new FormControl('',[
        Validators.required
      ]),
      repetirPassword: new FormControl('',[
        Validators.required
      ])

    });
  }

  ngOnInit(): void {
  }

  //IMPRIMIR LA INFORMACION DE LOS CAMPOS
  onSubmit(){
    console.log(this.formulario.value);
  }

  //METODO PARA COMPROBAR SI EL CAMPO ES VALIDO O NO
  validar(campo){
    if(this.formulario.controls[campo].invalid && this.formulario.controls[campo].touched){
      return true;
    }else{
      return false;
    }
  }


  //VALIDACION PERSONALIZADA
  validadEdad(campoValor){
    const min=18;
    const max=65;

    if(campoValor.value >= 18 && campoValor.value <=65){
      return null;
    }else{
      return {validadEdad:{
        max,min
      }}
    }
  }

  //METODOS PARA VALIDAR SI ES REQUERIDO
  vRequerido(campo:string){
    if(this.formulario.controls[campo].errors?.required && this.formulario.controls[campo].touched){
      return true;
    }else{
      return false;
    }
  }

  //METODOS PARA VALIDAR LA CANTIDAD DE CARACTERES
  vCantidad(campo:string){
    if(this.formulario.controls[campo].errors?.minlength && this.formulario.controls[campo].touched){
      return true;
    }else{
      return false;
    }
  }

  //METODO PARA VALIDAR EL EMAIL
  vEmail(campo:string){
    if(this.formulario.controls[campo].errors?.pattern && this.formulario.controls[campo].touched){
      return true;
    }else{
      return false;
    }
  }

}
