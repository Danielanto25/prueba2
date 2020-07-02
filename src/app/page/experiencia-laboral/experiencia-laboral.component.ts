import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  form: FormGroup;
  variable: string = '';
  variable2: string = '';
  lstTitcodigo: Codigo[] = [{ codigo: 1, nombre: 'Programador' }, { codigo: 2, nombre: 'administrativos' }];
  lstPercodigo: Codigo[] = [{ codigo: 1, nombre: 'Daniel' }, { codigo: 2, nombre: 'Antonio' }];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }
  private initform(): void {
    this.form = this.fb.group({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      perCodigo: new FormControl('', Validators.required),
      titCodigo: new FormControl('', Validators.required),

    });
  }
  clickenviar(): void {
    console.log("enviando...")
  }
}
interface Codigo {
  codigo: number;
  nombre: string;
}
