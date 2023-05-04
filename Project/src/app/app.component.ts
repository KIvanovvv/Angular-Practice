import { Component } from '@angular/core';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService],
})
export class AppComponent {
  recipesVisible: boolean = true;
  shoppingListVisible: boolean = false;

  showPage(pageVisible: { [key: string]: boolean }) {
    this.recipesVisible = pageVisible['recepiesComponentClicked'];
    this.shoppingListVisible = pageVisible['shoppingListComponentClicked'];
  }
}
