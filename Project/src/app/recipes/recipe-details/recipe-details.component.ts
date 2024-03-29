import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe;
  constructor(private shoppingService: ShoppingService) {}
  onToShoppingList() {
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingService.onAddItem(ingredient);
    });
  }
}
