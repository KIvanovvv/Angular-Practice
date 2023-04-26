import { Component } from '@angular/core';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styles: [
    `
      .whites {
        color: white;
      }
    `,
  ],
})
export class DisplayItemsComponent {
  detailsVisible = false;
  logs = [];
  startingNumber = 0;

  onToggleDetails() {
    this.startingNumber++;
    this.logs.push(this.startingNumber);
    this.detailsVisible = !this.detailsVisible;
  }
  checkLogs() {
    return this.logs.length >= 5 ? 'blue' : 'blacks';
  }
}
