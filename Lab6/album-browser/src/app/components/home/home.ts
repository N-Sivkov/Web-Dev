import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './home.css',
  template: `
    <div>
      <h1>Welcome to the Album Browser</h1>
      <p>The webapp for browsing albums.</p>
      <button routerLink="/albums">Browse Albums</button>
    </div>
  `
})
export class Home {}