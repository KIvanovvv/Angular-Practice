import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modal';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is a tasty schnitzel',
      'https://png.pngtree.com/png-clipart/20190828/ourmid/pngtree-chicken-schnitzel-with-mashed-potatoes-png-image_1701606.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Burger',
      'This is a superb burger',
      'https://png.pngtree.com/png-clipart/20190802/ourmid/pngtree-classic-burger-fresh-veg-transparent-png-background-png-image_1645405.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  getRecipesList() {
    return this.recipes.slice();
  }
}
