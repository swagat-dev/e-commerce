import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommerceService } from '../service/commerce.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  @Input() selectedItems;

  constructor(private router: Router, private commerceService: CommerceService) { }

  ngOnInit() {
  }

  public openCart() {
    this.commerceService.sendSelectedItem(this.selectedItems);
    this.router.navigate(['/cart']);
  }
}
