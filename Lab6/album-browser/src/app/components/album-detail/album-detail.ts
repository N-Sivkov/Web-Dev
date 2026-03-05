import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './album-detail.css',
  template: `
    <div *ngIf="album() as a">
      <h2>{{ a.title }}</h2>
      <p>ID: {{ a.id }}</p>
      <p>User ID: {{ a.userId }}</p>
      <input
        [ngModel]="titleDraft()"
        (ngModelChange)="titleDraft.set($event)"
      />

      <button (click)="save()">Save</button>
      <br><br>
      <button [routerLink]="['/albums', a.id, 'photos']">
        View Photos
      </button>
      <button routerLink="/albums">Back</button>
    </div>
  `
})
export class AlbumDetail implements OnInit {

  album = signal<Album | null>(null);
  titleDraft = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    //private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album.set(data);
      this.titleDraft.set(data.title);
    });
  }

  save() {
    const current = this.album();
    const newTitle = this.titleDraft().trim();

    if (!current || !newTitle) return; // no empty submissions

    const updated: Album = {
      ...current,
      title: newTitle
    };

    this.albumService.updateAlbum(updated).subscribe(saved => {
      this.album.set(saved); // updating local signal
    });
  }
}