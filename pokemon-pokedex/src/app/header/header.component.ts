import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data: any; // assuming your API returns JSON data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    const apiUrl = 'https://pokeapi.co/api/v2/ability/150/';
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