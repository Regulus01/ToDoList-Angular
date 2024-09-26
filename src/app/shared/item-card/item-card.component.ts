import { Component, Input, OnInit } from '@angular/core';
import { TodoListData } from '../../models/interfaces/GetPaginatedTodoListRequest';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() todoListData: TodoListData | null = null;

  constructor() { }

  ngOnInit() {
  }

}
