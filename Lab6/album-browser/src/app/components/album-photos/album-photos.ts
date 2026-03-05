import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './album-photos.css',
  template: `
    <h2>Photos</h2>
    <div class="grid">
      <div *ngFor="let photo of photos()">
        <img [src]="photo.url" [alt]="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
    <br>
    <button (click)="back()">Back</button>
  `
})
export class AlbumPhotos implements OnInit {

  photos = signal<Photo[]>([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos.set(data);
    });
  }

  back() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}