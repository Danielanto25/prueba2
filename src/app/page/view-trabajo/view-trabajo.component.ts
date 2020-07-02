import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-view-trabajo',
  templateUrl: './view-trabajo.component.html',
  styleUrls: ['./view-trabajo.component.css']
})
export class ViewTrabajoComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'trabajo', ];
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

}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen'},
  { id: 2, name: 'Helium'},
  { id: 3, name: 'Lithium'},
  { id: 4, name: 'Beryllium'},
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon'},
  { id: 7, name: 'Nitrogen'},
  { id: 8, name: 'Oxygen', },
  { id: 9, name: 'Fluorine',},
  { id: 10, name: 'Neon',  },
  { id: 11, name: 'Sodium', },
  { id: 12, name: 'Magnesium', },
  { id: 13, name: 'Aluminum',  },
  { id: 14, name: 'Silicon', },
  { id: 15, name: 'Phosphorus',},
  { id: 16, name: 'Sulfur', },
  { id: 17, name: 'Chlorine',  },
  { id: 18, name: 'Argon',  },
  { id: 19, name: 'Potassium',  },
  { id: 20, name: 'Calcium',  },
];

