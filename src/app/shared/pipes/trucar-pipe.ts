import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucar',
  pure: true
})
export class TrucarPipe implements PipeTransform {
  transform(value: string, limite: number = 20, sufixo: string = '...'): string {
    if(!value){
      return '';
    }
    return value.length > limite ? value.substring(0, limite) + sufixo: value;
  }

}
