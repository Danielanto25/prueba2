import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as _moment from 'moment';

const moment=_moment;


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  form: FormGroup;
  fechai:Date;
  fechafi:string='';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('',Validators.required),
      identificacion: new FormControl('',Validators.required),
      fechaNacimiento:new FormControl('',Validators.required),
    })
  }
  clickenviar():void{
    console.log("enviando...")
    this.fechai=this.form.get('fechaNacimiento').value;
    this.fechafi=moment(this.fechai,'MM DD YYYY').format('YYYY-MM-DD');
  }

}
