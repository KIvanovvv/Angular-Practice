import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) {}
  
  onAddItem(amountInput: HTMLInputElement) {
    this.shoppingService.onAddItem({name:this.nameInputRef.nativeElement.value,amount:Number(amountInput.value)});
    this.nameInputRef.nativeElement.value = '';
    amountInput.value = '';
  }
}
