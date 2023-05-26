import { Component } from '@angular/core';
import { TodoItem } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do';
  TodoItems: TodoItem[] = [
    {
      title: 'mimi',
      isCompleted: false,
      id: 1,
    },
    {
      title: 'lara',
      isCompleted: false,
      id: 2,
    },
    {
      title: 'rahaf',
      isCompleted: false,
      id: 3,
    },
  ];

  addItem(): void {
    this.TodoItems.push({
      title: this.title,
      id: Date.now(),
      isCompleted: false,
    });
    this.title = '';
  }

  toggleTodoItem(todoItem: TodoItem): void {
    this.TodoItems = this.TodoItems.map((item) => {
      if (item.id === todoItem.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
  }
}
