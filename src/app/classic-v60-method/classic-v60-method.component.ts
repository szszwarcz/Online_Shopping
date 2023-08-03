import { Component } from '@angular/core';

@Component({
  selector: 'app-classic-v60-method',
  templateUrl: './classic-v60-method.component.html',
  styleUrls: ['./classic-v60-method.component.css']
})
export class ClassicV60MethodComponent {
  classicV60Recipe: string[] = [
    "Boil the Water: Start by boiling filtered water. The ideal water temperature for V60 brewing is around 195°F to 205°F (90°C to 96°C). Allow the boiled water to sit for about 30 seconds to reach the desired temperature.",
    "Rinse the Filter: Place the V60 paper filter in the dripper and rinse it with hot water. This step removes any paper taste and preheats the V60 and your coffee cup or server. Discard the rinse water.",
    "Weigh the Coffee: Measure the appropriate amount of coffee beans based on your desired coffee-to-water ratio. A common starting point is 1:16, which means 1 gram of coffee to 16 grams of water. For example, if you're using 20 grams of coffee, you'll need 320 grams of water.",
    "Grind the Coffee: Grind the coffee beans to a medium-fine consistency, resembling granulated sugar. The grind size is crucial for even extraction.",
    "Place the Dripper: Set the V60 dripper on top of your coffee cup or server.",
    "Add Coffee Grounds: Add the ground coffee to the center of the V60 dripper, creating a small indentation in the coffee bed.",
    "Start the Timer: Begin the timer as you pour. This will help you track the brewing time.",
    "Bloom the Coffee: Start pouring hot water evenly over the coffee grounds, just enough to saturate them. Allow the coffee to bloom for about 30 seconds. During this time, carbon dioxide is released, leading to an even extraction.",
    "Begin Pouring: After the bloom, start pouring the remaining water in a controlled, circular motion, beginning from the center and spiraling outward. Try to maintain a steady, controlled pour.",
    "Let it Drain: Once you've poured all the water, allow the coffee to fully drain through the grounds in the dripper. The entire brewing process should typically take around 2.5 to 3.5 minutes.",
    "Lift the Dripper: Carefully remove the V60 dripper from your cup or server, and marvel at the beautiful coffee you've brewed.",
    "Sip and Savor: Your classic V60 pour-over coffee is now ready to enjoy. Take a moment to appreciate the aroma and flavors in each sip."
  ];
  wholeBrew : number = 300;
  firstPourWater : number = 30;
  roundValue(toRound:number):number{
    return Math.round(toRound);
  }
}
