import { Component } from '@angular/core';

@Component({
  selector: 'app-james-hoffman-method',
  templateUrl: './james-hoffman-method.component.html',
  styleUrls: ['./james-hoffman-method.component.css']
})
export class JamesHoffmanMethodComponent {
  jamesHoffmansMethodSteps: string[] = [
    "Grind the Coffee: Begin by selecting your preferred coffee beans and grinding them to a medium-fine consistency, similar to granulated sugar. A precise grind is essential for uniform extraction.",
    "Rinse the Filter: Insert the V60 paper filter into the dripper and rinse it with hot water. This minimizes any paper taste and preheats the V60 and your cup. Discard the rinse water.",
    "Bloom the Coffee: Place the V60 dripper on top of your cup or server and add the ground coffee. Start the timer and pour a small amount of hot water (about twice the weight of the coffee) over the coffee grounds, ensuring they are evenly saturated. Allow the coffee to bloom for 45 seconds.",
    "Begin the Pour: After the bloom, initiate a slow and controlled pour, adding hot water in a circular motion. Begin pouring from the center and gradually move outward, maintaining a consistent pace. The spiral pour encourages even extraction.",
    "Control the Flow: Observe the rate at which water drips through the coffee bed. Adjust your pouring speed to manage the flow and maintain a steady water level in the dripper.",
    "Achieve the Ideal Brew Time: James Hoffmann recommends a total brew time of around 2 minutes. Adjust your pouring technique and water flow to align with this timeframe.",
    "Finishing Touch: Once you've poured the desired amount of water, allow the remaining water to drain through the coffee grounds in the dripper. The end of the brew is marked by a slow drip or a gentle stream.",
    "Serve and Savor: Lift the V60 dripper, revealing the culmination of your meticulous process. The resulting coffee is a testament to Hoffmann's methodical approach. Pour the brewed coffee into your cup and savor the aromas, flavors, and nuances that have been masterfully extracted.",
    "Experimentation and Mastery: The James Hoffmann V60 method offers a canvas for exploration. Feel empowered to tweak variables such as grind size, water temperature, pouring technique, and coffee-to-water ratio. Each adjustment imparts a unique character to your brew, allowing you to craft coffee that resonates with your personal taste."
  ];
  wholeBrew : number = 500;
  roundValue(toRound:number):number{
    return Math.round(toRound);
  }
  firstPourWater:number = this.wholeBrew/7.15;
}
