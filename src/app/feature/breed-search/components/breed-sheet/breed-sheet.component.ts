import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { map } from 'rxjs';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-breed-sheet',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './breed-sheet.component.html',
  styles: ``,
})
export class BreedSheetComponent {
  breedName = input.required<string>();

  dogsService = inject(DogsService);

  breedImagesUrl$ = computed(() => {
    console.log('Breed name:', this.breedName());
    return this.dogsService
      .findBreedImages(this.breedName())
      .pipe(map((images) => images[Math.floor(Math.random() * images.length)]));
  });
}
