export class BrewTime {
  minutes: number;
  seconds: number;
  constructor(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.seconds = seconds;
  }
  devideBy(factor: number):void {
    const totalSeconds = this.minutes * 60 + this.seconds;
    const devidedSeconds = totalSeconds / factor;
    this.minutes = Math.floor(devidedSeconds / 60);
    this.seconds = Math.round(devidedSeconds % 60);
  }
  multiply(factor: number): void {
    const totalSeconds = this.minutes * 60 + this.seconds;
    const multipliedSeconds = totalSeconds * factor;

    this.minutes = Math.floor(multipliedSeconds / 60);
    this.seconds = Math.round(multipliedSeconds % 60);
  }
  displayDate():string{
    return this.minutes+":"+this.seconds;
  }
  
}
