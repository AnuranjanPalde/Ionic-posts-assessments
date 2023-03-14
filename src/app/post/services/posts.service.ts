import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com'
  constructor(private readonly http: HttpClient) { }

  public getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}/posts`)
      .pipe(
        map(i => i.map(item => new PostModel(item))),
      );
  }
}
