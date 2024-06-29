import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { BreedImageResponse, BreedListResponse } from '../utils/models';

const API_URL = environment.dogsApi;
const BREEDS_PATH = '/breeds';
const BREED_PATH = '/breed';
const LIST_ALL_PATH = '/list/all';
const IMAGES_PATH = '/images';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  http = inject(HttpClient);

  findBreedsNames(): Observable<string[]> {
    return this.http
      .get<BreedListResponse>(`${API_URL}${BREEDS_PATH}${LIST_ALL_PATH}`)
      .pipe(map((breeds) => Object.keys(breeds.message).map((breed) => breed)));
  }

  findBreedImages(breed: string): Observable<string> {
    return this.http
      .get<BreedImageResponse>(`${API_URL}${BREED_PATH}/${breed}${IMAGES_PATH}`)
      .pipe(
        tap(console.log),
        map((breeds) => breeds.message),
      );
  }
}
