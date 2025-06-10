export class Structure {
  id: string;
  type: string;
  moneyCost: number;
  timeToComplete: number;
  currentCompletionProgress: number;

  constructor(
    id: string,
    type: string,
    moneyCost: number,
    timeToComplete: number,
    currentCompletionProgress: number
  ) {
    this.id = id;
    this.type = type;
    this.moneyCost = moneyCost;
    this.timeToComplete = timeToComplete;
    this.currentCompletionProgress = currentCompletionProgress;
  }
}
