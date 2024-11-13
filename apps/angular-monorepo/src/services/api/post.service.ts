import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { PostGetAllResponse } from '../../models/post/post-get-all-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected readonly http = inject(HttpClient);
  protected readonly authService = inject(AuthService);

  public getAll(): Observable<PostGetAllResponse[]> {
    const apiUri = 'http://localhost:5000';

    return this.http.get<PostGetAllResponse[]>(`${apiUri}/api/post`, {
      headers: {
        Authorization: this.authService.accessTokenHeader,
        'Content-Type': 'application/json',
      },
    });
  }
}
