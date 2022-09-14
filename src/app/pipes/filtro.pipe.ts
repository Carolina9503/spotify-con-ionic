import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', coloumna: string = 'title'): any[] {
    console.log('_____',arreglo);
    if (texto === '') {
      return arreglo;
    }
    // si el arreglo viene vacio osea diferente de null
    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

      return arreglo.filter(
        item => item[coloumna].name.toLowerCase().includes(texto)
      );


  }

}
