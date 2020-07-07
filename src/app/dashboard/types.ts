export interface RootObject {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

export interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
