import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommerceService } from '../service/commerce.service';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  public displayItems = [];
  public selectedItems = [];
  public jsonPath = 'data.json';
  @Output() selectedItem = new EventEmitter();

  constructor(private commerceService: CommerceService) { }

  ngOnInit() {
    this.commerceService.getJSON().subscribe(data => {
      this.displayItems = data['productlist'];
      console.log('...............................', this.displayItems);
    });
  }

  public addtocart(item) {
    this.selectedItems.push(item);
    this.selectedItem.emit(this.selectedItems);
  }
}
