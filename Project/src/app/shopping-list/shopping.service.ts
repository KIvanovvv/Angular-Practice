import { Ingredient } from "../shared/ingredient.modal";
import { EventEmitter } from "@angular/core";

export class ShoppingService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
   getIngredients(){
         return this.ingredients.slice();
   }
    onAddItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}