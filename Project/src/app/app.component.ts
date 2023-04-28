import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipesVisible: boolean = true;
  shoppingListVisible: boolean = false;

  showPage(pageVisible: { [key: string]: boolean }) {
    this.recipesVisible = pageVisible['recepiesComponentClicked'];
    this.shoppingListVisible = pageVisible['shoppingListComponentClicked'];
  }
}
