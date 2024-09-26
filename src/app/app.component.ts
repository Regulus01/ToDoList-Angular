import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistService } from './../services/todolist.service';
import { GetPaginatedTodoListRequest, TodoListData } from './models/interfaces/GetPaginatedTodoListRequest';
import { ItemCardComponent } from './shared/item-card/item-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'todoList';
  public TodoLists : TodoListData[] = []; 

  constructor(private todoService : TodolistService) {
    this.getTodoList()
 
  }
  
  ngOnInit(): void {
   
  }

  getTodoList(){
    this.todoService.getPaginatedTasks(1, 10)
    .subscribe({
      next: (response) => {
        this.TodoLists = response.data as TodoListData[];
        console.log(this.TodoLists)
      }
    })

  }
}
