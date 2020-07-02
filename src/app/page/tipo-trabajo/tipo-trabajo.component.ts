import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-trabajo',
  templateUrl: './tipo-trabajo.component.html',
  styleUrls: ['./tipo-trabajo.component.css']
})
export class TipoTrabajoComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),

    })
  }
  clickenviar(): void {
    console.log("enviando...")
  }

}
