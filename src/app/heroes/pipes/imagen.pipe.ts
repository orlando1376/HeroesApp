import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.intercafe';

@Pipe({
  name: 'imagen',
  // pure: false // para que se dispare en cada paso del ciclo de detección de angular
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {    
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else
    {
      return `assets/heroes/${ heroe.id }.jpg`;
    }
  }

}
