import { School } from "./Schoolmodel";

export interface Student {
    id: number;
    name: string;
    birth: Date;
    age: number;
    school: School;
  }
  