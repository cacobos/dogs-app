import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-text',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './search-text.component.html',
  styles: `
    .example-full-width {
      width: 100%;
    }
  `,
})
export class SearchTextComponent {
  label = input<string>('Type to search...');
  term = model.required<string>();
}
