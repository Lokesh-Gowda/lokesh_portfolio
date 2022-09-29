import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  ShowMoreContents = false;
  btnName = 'Show  More';

  toggleContent() {

    this.ShowMoreContents = !this.ShowMoreContents;
    if (this.ShowMoreContents) {

      this.btnName = 'Show Less';
    }
    else {
      this.btnName = 'Show More';
    }
  }

}
