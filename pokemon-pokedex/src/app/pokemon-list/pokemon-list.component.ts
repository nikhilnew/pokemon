import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  data: any; // assuming your API returns JSON data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
    this.http.get(apiUrl).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
