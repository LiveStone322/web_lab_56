import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos = [
    {
      title: 'title1',
      done: true,
    },
    {
      title: 'title2',
      done: false,
    },
    {
      title: 'title3',
      done: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDoneClick(idx: number) {
    this.todos[idx].done = !this.todos[idx].done;
  }
}
