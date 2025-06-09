export class Research {
  id: string;
  cost: number;
  timeToComplete: number;
  description: string;

  constructor(
    id: string,
    cost: number,
    timeToComplete: number,
    description: string
  ) {
    this.id = id;
    this.cost = cost;
    this.timeToComplete = timeToComplete;
    this.description = description;
  }
}
