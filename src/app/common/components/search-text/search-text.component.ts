import {
  AsyncPipe,
  CommonModule,
  JsonPipe,
  TitleCasePipe,
} from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatOption,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-search-text',
  standalone: true,
  imports: [
    MatInputModule,
    MatAutocompleteModule,
    MatOption,
    FormsModule,
    AsyncPipe,
    JsonPipe,
    CommonModule,
    TitleCasePipe,
  ],
  templateUrl: './search-text.component.html',
  styles: `
    .example-full-width {
      width: 100%;
    }
  `,
})
export class SearchTextComponent {
  label = input<string>('Type to search...');
  options = input.required<string[]>();
  filteredOptions: Observable<string[]>;
  term = signal<string>('');
  onSelectElement = output<string>();

  constructor() {
    this.filteredOptions = toObservable(this.term).pipe(
      startWith(''),
      map((value) => this._filter(value)),
    );
  }

  onOptionSelected(option: string) {
    this.onSelectElement.emit(option);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options().filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }
}
