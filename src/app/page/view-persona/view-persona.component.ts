import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-persona',
  templateUrl: './view-persona.component.html',
  styleUrls: ['./view-persona.component.css']
})
export class ViewPersonaComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'apellido', 'identificacion','edad'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name: string;
  id: number;
  apellido: string;
  identificacion: string;
  edad:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', apellido: "apellido2", identificacion: 'H',edad:18 },
  { id: 2, name: 'Helium', apellido: "apellido1", identificacion: 'He',edad:18 },
  { id: 3, name: 'Lithium', apellido: "apellido3", identificacion: 'Li',edad:18 },
  { id: 4, name: 'Beryllium', apellido: "apellido4", identificacion: 'Be',edad:18 },
  { id: 5, name: 'Boron', apellido: "apellido5", identificacion: 'B',edad:18 },
  { id: 6, name: 'Carbon', apellido: "apellido6", identificacion: 'C' ,edad:18},
  { id: 7, name: 'Nitrogen', apellido: "apellido7", identificacion: 'N',edad:18 },
  { id: 8, name: 'Oxygen', apellido: "apellido8", identificacion: 'O',edad:18 },
  { id: 9, name: 'Fluorine', apellido: "apellido9", identificacion: 'F',edad:18 },
  { id: 10, name: 'Neon', apellido: "apellido10", identificacion: 'Ne',edad:18 },
  { id: 11, name: 'Sodium', apellido: "apellido11", identificacion: 'Na',edad:18 },
  { id: 12, name: 'Magnesium', apellido: "apellido12", identificacion: 'Mg',edad:18 },
  { id: 13, name: 'Aluminum', apellido: "apellido13", identificacion: 'Al',edad:18 },
  { id: 14, name: 'Silicon', apellido: "apellido14", identificacion: 'Si',edad:18 },
  { id: 15, name: 'Phosphorus', apellido: "apellido15", identificacion: 'P',edad:18 },
  { id: 16, name: 'Sulfur', apellido: "apellido16", identificacion: 'S',edad:18 },
  { id: 17, name: 'Chlorine', apellido: "apellido17", identificacion: 'Cl',edad:18 },
  { id: 18, name: 'Argon', apellido: "apellido18", identificacion: 'Ar',edad:18 },
  { id: 19, name: 'Potassium', apellido: "apellido19", identificacion: 'K',edad:18 },
  { id: 20, name: 'Calcium', apellido: "apellido120", identificacion: 'Ca',edad:18 },
];
