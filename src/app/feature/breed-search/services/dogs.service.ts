import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

const API_URL = environment.dogsApi;
const BREEDS_PATH = '/breeds';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  http = inject(HttpClient);

  findAllBreeds() {
    return this.http.get(`${API_URL}${BREEDS_PATH}`);
  }

  searchBreed(term: string) {
    return this.http.get(`${API_URL}${BREEDS_PATH}/${term}`);
  }
}
