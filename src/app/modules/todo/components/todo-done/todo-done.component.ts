import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDoneComponent implements OnInit {
  @Input() done = false;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
