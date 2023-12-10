import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../Models/Universite'; // Adjust the path accordingly

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getUniversities(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`http://localhost:8080/universites/getall`);
  }
  getUniversiteById(id: number): Observable<Universite> {
    const url = `http://localhost:8080/universites/get/${id}`;
    return this.http.get<Universite>(url);
  }
}
