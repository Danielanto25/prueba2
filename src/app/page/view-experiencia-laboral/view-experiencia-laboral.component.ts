import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-experiencia-laboral',
  templateUrl: './view-experiencia-laboral.component.html',
  styleUrls: ['./view-experiencia-laboral.component.css']
})
export class ViewExperienciaLaboralComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'apellido', 'identificacion', 'edad'];
  dataSource = new MatTableDataSource<ExperienciaLaboral>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(

  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

  }

}
export interface ExperienciaLaboral {
  perCodigo: number;
  codigo: number;
  fechaInicio: string;
  fechaFin: string;
  titCodigo: number;
}
const ELEMENT_DATA: ExperienciaLaboral[] = [
  { codigo: 1, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 2, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 3, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 4, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 5, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 6, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 7, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 8, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 9, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 10, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 11, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 12, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 13, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 14, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 15, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 16, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 17, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 18, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 19, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
  { codigo: 20, fechaInicio: '02-06-2020', fechaFin: "02-07-2020", titCodigo: 1, perCodigo: 18 },
];