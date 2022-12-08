export type Test = 'aaa';

export interface HeaderConfig {
  field: string;
  name: string;
}

export interface RowConfig {
  id: number;
  [key: string]: any;
}
