import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/components/home/home.component').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'breed-search',
    loadComponent: () =>
      import('./feature/breed-search/breed-search.component').then(
        (m) => m.BreedSearchComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
