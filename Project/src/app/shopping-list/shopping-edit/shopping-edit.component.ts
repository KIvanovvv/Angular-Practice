import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @Output() addedItem = new EventEmitter<Ingredient>();
  onAddItem(amountInput: HTMLInputElement) {
    this.addedItem.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        Number(amountInput.value)
      )
    );
    this.nameInputRef.nativeElement.value = '';
    amountInput.value = '';
  }
}
