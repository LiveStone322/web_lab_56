import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-knobs',
  templateUrl: './knobs.component.html',
  styleUrls: ['./knobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnobsComponent implements OnInit {
  titleControl = new FormControl('');

  _placeholder = '';
  get placeholder() {
    if (this._placeholder === '') {
      this._placeholder = this.getRandom();
      return this._placeholder;
    } else return this._placeholder;
  }

  constructor() {}

  ngOnInit(): void {}

  getRandom() {
    let placeholders = [
      'Покосить газон',
      'Вынести мусор',
      'Покормить пса',
      'Сделать домашку',
      'Покормить кошку',
      'Покормить попугая'
    ];

    return placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  onAdd(){
    this._placeholder = this.getRandom();
  }
}
