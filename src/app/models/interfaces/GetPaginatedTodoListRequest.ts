import { Result } from './Result';

export interface GetPaginatedTodoListRequest extends Result {
  data: TodoListData[];
}

export interface TodoListData {
  id: string;
  title: string;
  creationDate: Date;
  updateDate: Date;
}
