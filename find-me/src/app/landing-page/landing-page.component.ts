import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public selectedItem;
  constructor() { }

  ngOnInit() {
  }

  public itemSelected(e) {
    this.selectedItem = e;
  }
}
