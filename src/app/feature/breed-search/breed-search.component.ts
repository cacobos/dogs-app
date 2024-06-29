import { Component, effect, signal } from '@angular/core';
import { SearchTextComponent } from '../../common/components/search-text/search-text.component';
import { debouncedSignal } from '../../common/utils/debounced-signal';

@Component({
  selector: 'app-breed-search',
  standalone: true,
  imports: [SearchTextComponent],
  templateUrl: './breed-search.component.html',
  styles: ``,
})
export class BreedSearchComponent {
  term = signal<string>('');
  debouncedTerm = debouncedSignal(this.term, 250);

  constructor() {
    effect(() => {
      console.log(this.debouncedTerm());
    });
  }
}
