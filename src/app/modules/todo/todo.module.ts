import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TodoDoneComponent } from './components/todo-done/todo-done.component';
import { KnobsComponent } from './components/knobs/knobs.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoComponent, TodoDoneComponent, KnobsComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class TodoModule {}
