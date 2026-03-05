import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  styleUrl: './about.css',
  template: `
  <div>
    <h1>About</h1>
    <p>Nikita Sivkov</p>
    <p>Web Development</p>
    <p>The Album Browser Webapp; born in great torment.</p>
  </div>
  `
})
export class About {}