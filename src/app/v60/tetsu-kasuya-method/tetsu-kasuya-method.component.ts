import { BrewTime } from './../../brew-time';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tetsu-kasuya-method',
  templateUrl: './tetsu-kasuya-method.component.html',
  styleUrls: ['./tetsu-kasuya-method.component.css']
})
export class TetsuKasuyaMethodComponent {
  tetsuKasuyaMethod = [
    "Grind the Coffee: Start by selecting freshly roasted coffee beans and grinding them to a medium-fine consistency, resembling granulated sugar. The right grind size ensures optimal extraction and flavor balance.",
    "Prepare the Equipment: Place a V60 dripper with a paper filter on top of your carafe or coffee cup. Rinse the paper filter with hot water to remove any paper taste and preheat the brewing equipment. Discard the rinse water.",
    "Add the Coffee Grounds: Measure and add the desired amount of coffee grounds to the paper filter in the V60 dripper. A typical starting ratio is 1:15 (coffee to water), but feel free to adjust it based on your preferences.",
    "First Pour - The '4': Start the timer and pour hot water (around 90°C to 96°C) over the coffee grounds, evenly saturating them until you reach 40% of the total water weight (e.g., for 30g of coffee, pour 12g of water). Allow the coffee to bloom for about 45 seconds.",
    "Second Pour - The '6': After the initial bloom, pour more hot water slowly in a circular motion until you reach 60% of the total water weight (e.g., for 30g of coffee, pour an additional 18g of water). Continue the pour in a steady manner, maintaining an even extraction.",
    "Final Pour: Once the timer hits one minute, begin the final pour to reach the desired total water weight (e.g., for 30g of coffee, pour the remaining 30g of water). Pour steadily and avoid agitation, ensuring an even extraction.",
    "Wait for Full Drainage: Allow the coffee to fully drain through the V60 dripper. The entire brewing process should typically take around 2.5 to 3 minutes.",
    "Serve and Savor: Remove the V60 dripper, and your coffee is now ready to be served. Take a moment to appreciate the well-balanced flavors that the 4:6 Method has unlocked in your cup.",
  ];
  wholeBrew:number=300;
  ammoutOfCoffee:number = this.wholeBrew/15;
  firstPourWater:number = 6;
  noOfPours:number = 3;
  bt:BrewTime = new BrewTime(2,15);
  resultFnc():string {
    this.bt.devideBy(this.noOfPours);
    this.bt.multiply(3);
    return this.bt.displayDate();
  }
  result:string = this.resultFnc();
}


