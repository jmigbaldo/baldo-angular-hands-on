import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.css']
})
export class BodyHeaderComponent implements OnInit {

  headerTitle = "Quotation / Quotation Processing";

  constructor() { }

  ngOnInit() {
  }

}
