import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body-sidebar',
  templateUrl: './body-sidebar.component.html',
  styleUrls: ['./body-sidebar.component.css']
})

export class BodySidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	sidenavFunction() {
	let dropdown = document.getElementsByClassName("dropdown-btn");
	let i: number;

	for (i = 0; i < dropdown.length; i++) {
	  dropdown[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var dropdownContent = this.nextElementSibling;
	    if (dropdownContent.style.display === "block") {
	      dropdownContent.style.display = "none";
	    } else {
	      dropdownContent.style.display = "block";
	    }
	  });
	}
	}
	
}
