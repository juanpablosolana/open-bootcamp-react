import { LEVELS } from './levels.enum';
export class Task {
  name = '';
  description = '';
  completed = false;
  level = LEVELS.NORMAL
  constructor(name, descripotion, completed, level) {
    this.name = name;
    this.description = descripotion;
    this.completed = completed;
    this.level = level;
  }
}