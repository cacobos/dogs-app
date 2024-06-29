import { Component, OnInit, effect, inject } from '@angular/core';
import { SearchTextComponent } from '../../common/components/search-text/search-text.component';
import { BreedSheetComponent } from './components/breed-sheet/breed-sheet.component';
import { DogsService } from './services/dogs.service';

@Component({
  selector: 'app-breed-search',
  standalone: true,
  imports: [SearchTextComponent, BreedSheetComponent],
  templateUrl: './breed-search.component.html',
  styles: ``,
})
export class BreedSearchComponent implements OnInit {
  breedNames: string[] = [];
  selectedBreed = '';

  dogsService = inject(DogsService);

  constructor() {
    effect(() => {
      // this.dogsService.searchBreed(this.debouncedTerm()).subscribe((breeds) => {
      //   console.log(breeds);
      // });
    });
  }

  ngOnInit() {
    this.dogsService.findBreedsNames().subscribe((breeds) => {
      this.breedNames = breeds;
    });
  }

  onSelectBreed(breed: string) {
    this.selectedBreed = breed;
  }
}
