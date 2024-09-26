import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistService } from './../services/todolist.service';
import { GetPaginatedTasks } from './models/interfaces/GetPaginatedTasks';
import { ItemCardComponent } from './shared/item-card/item-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoList';
  public TodoList = Array<GetPaginatedTasks>; 

  constructor(private todoService : TodolistService) {
  }

  getTodoList(){
    this.todoService.getPaginatedTasks(1, 10)
    .subscribe({
      next: (response) => {
        console.log(response)
      }
    })

  }
}
