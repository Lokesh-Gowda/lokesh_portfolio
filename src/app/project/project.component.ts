import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

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
