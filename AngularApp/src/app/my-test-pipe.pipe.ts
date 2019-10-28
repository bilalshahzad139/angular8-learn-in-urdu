import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTestPipe'
})
export class MyTestPipePipe implements PipeTransform {

  transform(value: string): any {
    return value + " 1234 By LearningInUrdu.pk";
  }

}
