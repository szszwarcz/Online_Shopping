import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipeline'
})
export class MyPipelinePipe implements PipeTransform {

  transform(value: any, args?:any): any {
    if(args == "M"){
      return "Mr."+value;
    }
    else if(args == "F")
    {
      return "Ms."+ value;
    }
  }

}
