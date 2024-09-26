import { Result } from './Result';

export interface GetPaginatedTasks extends Result {
  data: Data[];
}

interface Data {
  id: string;
  title: string;
  creationDate: string;
  updateDate: string;
}
