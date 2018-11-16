import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-quotation-processing',
  templateUrl: './quotation-processing.component.html',
  styleUrls: ['./quotation-processing.component.css']
})
export class QuotationProcessingComponent implements OnInit {

  displayedColumns = ['checkBox', 'coverCode', 'section', 'bulletNo', 'sumInsured', 'sortSE', 'addSI', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  headerTitle = "Quotation / Quotation Processing";

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface Element {
  checkBox: any;
  coverCode: string;
  section: string;
  bulletNo: string;
  sumInsured: string;
  sortSE: number;
  addSI: string;
  action: any;
}

const ELEMENT_DATA: Element[] = [
  {checkBox: '', coverCode: 'Contract Works', section: 'I', bulletNo: '1.1', sumInsured: '50,000,000.00', sortSE: 10, addSI: '', action: ''},
  {checkBox: '', coverCode: 'Materials Supplied', section: 'I', bulletNo: '1.2', sumInsured: '10,000,000.00', sortSE: 20, addSI: '', action: ''},
   {checkBox: '', coverCode: 'Contract Works', section: 'I', bulletNo: '1.1', sumInsured: '50,000,000.00', sortSE: 10, addSI: '', action: ''},
  {checkBox: '', coverCode: 'Materials Supplied', section: 'I', bulletNo: '1.2', sumInsured: '10,000,000.00', sortSE: 20, addSI: '', action: ''},
   {checkBox: '', coverCode: 'Contract Works', section: 'I', bulletNo: '1.1', sumInsured: '50,000,000.00', sortSE: 10, addSI: '', action: ''},
  {checkBox: '', coverCode: 'Materials Supplied', section: 'I', bulletNo: '1.2', sumInsured: '10,000,000.00', sortSE: 20, addSI: '', action: ''},
   {checkBox: '', coverCode: 'Contract Works', section: 'I', bulletNo: '1.1', sumInsured: '50,000,000.00', sortSE: 10, addSI: '', action: ''},
  {checkBox: '', coverCode: 'Materials Supplied', section: 'I', bulletNo: '1.2', sumInsured: '10,000,000.00', sortSE: 20, addSI: '', action: ''}
];