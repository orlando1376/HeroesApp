import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.intercafe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  txtBusqueda: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias(this.txtBusqueda.trim())
      .subscribe( heroes => this.heroes = heroes );
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    // para que se salga cuando la búsqueda es vacía
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return
    }
    
    const heroe: Heroe = event.option.value;
    this.txtBusqueda = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe( heroe => this.heroeSeleccionado = heroe );
  }
}
