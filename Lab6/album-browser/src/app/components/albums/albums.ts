import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './albums.css',
  template: `
    <h1>Albums</h1>

    <div *ngIf="loading()">Loading...</div>

    <ul *ngIf="!loading()">
      <li *ngFor="let album of albums()">
        <a [routerLink]="['/albums', album.id]">
          {{ album.id }} - {{ album.title }}
        </a><br><br>
        <button (click)="delete(album.id)">Delete</button>
      </li>
    </ul>
  `
})
export class Albums implements OnInit {

  albums = signal<Album[]>([]);
  loading = signal(true);

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums.set(data);
      this.loading.set(false);
    });
  }

  delete(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.update(list => list.filter(a => a.id !== id));
    });
  }
}