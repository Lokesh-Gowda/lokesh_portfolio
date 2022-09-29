import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ShowMoreContents = false;
  btnName = 'Show  Skills';

  toggleContent() {

    this.ShowMoreContents = !this.ShowMoreContents;
    if (this.ShowMoreContents) {

      this.btnName = 'Show Less';
    }
    else {
      this.btnName = 'Show Skills';
    }
  }

}
