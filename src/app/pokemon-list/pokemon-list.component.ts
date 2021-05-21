import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(
   private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemon()
    .subscribe((response: any) => {
      console.log(response);
      response.results.forEach((result: any) => {
        // let {name} = result;
        // console.log(typeof(result.name));
        this.dataService.getMoreData(result.name)
        .subscribe((uniqresponse: any) => {
          this.pokemons.push(uniqresponse);
          console.log(this.pokemons);
        });
      });
    });
  }

}


