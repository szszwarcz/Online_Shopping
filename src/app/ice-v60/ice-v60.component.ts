import { Component } from '@angular/core';

@Component({
  selector: 'app-ice-v60',
  templateUrl: './ice-v60.component.html',
  styleUrls: ['./ice-v60.component.css']
})
export class IceV60Component {
  iceV60Method: string[] = [
    "Boil Water: Start by boiling filtered water. You'll need some for brewing and some for melting the ice.",
    "Rinse the Filter: Place the V60 paper filter in the dripper and rinse it with hot water. Discard the rinse water.",
    "Measure and Grind: Weigh the desired amount of coffee beans based on your preferred coffee-to-water ratio. Grind the beans to a medium-fine consistency.",
    "Prepare Ice Cubes: Place a handful of ice cubes in your coffee cup or glass. The ice will melt as the brewed coffee drips onto it.",
    "Add Coffee Grounds: Place the V60 dripper on top of your cup with ice cubes. Add the ground coffee to the dripper.",
    "Bloom: Begin the brewing process by pouring a small amount of hot water over the coffee grounds, enough to saturate them. Allow the coffee to bloom for about 30 seconds.",
    "Begin Pouring: After the bloom, slowly pour the remaining hot water over the coffee grounds in a controlled circular motion. Ensure an even pour to fully extract the coffee flavors.",
    "Completion: Once you've completed pouring the water, allow the brewed coffee to drip onto the ice cubes below.",
    "Stirring: Gently stir the brewed coffee and ice together to rapidly cool the coffee.",
    "Savor the Experience: Your Ice V60 Pour-Over is now ready to be enjoyed. Each sip offers a harmonious blend of brewed coffee and ice, creating a tantalizing contrast of temperatures and flavors."
  ];

  wholeBrew : number = 300;
  firstPourWater : number = 30;
  roundValue(toRound:number):number{
    return Math.round(toRound);
  }
}
