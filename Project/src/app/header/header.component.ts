import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() managePage = new EventEmitter<{}>();
  recepiesComponentClicked = true;
  shoppingListComponentClicked = false;

  constructor() {}

  onRecipesClick() {
    this.recepiesComponentClicked = true;
    this.shoppingListComponentClicked = false;
    this.managePage.emit({
      recepiesComponentClicked: this.recepiesComponentClicked,
      shoppingListComponentClicked: this.shoppingListComponentClicked,
    });
  }

  onShoppingListClick() {
    this.recepiesComponentClicked = false;
    this.shoppingListComponentClicked = true;
    this.managePage.emit({
      recepiesComponentClicked: this.recepiesComponentClicked,
      shoppingListComponentClicked: this.shoppingListComponentClicked,
    });
  }
}
