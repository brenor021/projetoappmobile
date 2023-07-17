import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  public pokemons: any[] = []

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(){
    this.getPokemons()
  }

 getPokemons(){
    this.httpService.getPokemons().subscribe((data: any) => this.pokemons = data.results)
 }

 showPokemon(id: number){
  console.log('Id do pokemon: ' + id)
 }
}
