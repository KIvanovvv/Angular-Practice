import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  timer: any;
  @Output() gameNumberAdded = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    let counter = 1;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.gameNumberAdded.emit(counter);
      counter++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.timer);
  }
}
