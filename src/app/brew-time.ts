export class BrewTime {
  minutes: number;
  seconds: number;
  constructor(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.seconds = seconds;
  }
  devideBy(factor: number):string {
    const totalSeconds = this.minutes * 60 + this.seconds;
    const devidedSeconds = totalSeconds / factor;
    return Math.floor(devidedSeconds / 60) +""+ Math.floor(devidedSeconds % 60)
  }
  
}
