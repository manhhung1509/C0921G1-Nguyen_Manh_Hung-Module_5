import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from './todo';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todos');
  }
  
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<void> {
    console.log(todo);
    return this.http.post<void>(API_URL + '/todos', todo);
  }

  updateTodo(todo: Todo):Observable<void> {
    return this.http.put<void>(API_URL + '/todos', todo);
  }
}
