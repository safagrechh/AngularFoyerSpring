import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Foyer } from '../Models/Foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8080/Foyer';

  constructor(private http: HttpClient) { }

  addFoyer(foyerWithoutId: Partial<Foyer>): Observable<Foyer> {
    const url = `http://localhost:8080/Foyer/addFoyer`;
    return this.http.post<Foyer>(url, foyerWithoutId);
  }

  getAllFoyers(): Observable<Foyer[]> {
    const url = `http://localhost:8080/Foyer/getall`;
    return this.http.get<Foyer[]>(url);
  }
  deleteFoyer(idFoyer:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8080/Foyer/delete/"+idFoyer);
  }

  updateFoyer(foyer: Foyer): Observable<any>{
    const url = `http://localhost:8080/Foyer/update`;
    return this.http.put(url,foyer);
   
  }
  
  getFoyerById(id: number): Observable<Foyer> {
    const url = `http://localhost:8080/Foyer/get/${id}`;
    return this.http.get<Foyer>(url);
  }

  getFoyersByCapaciteRange(minCapacite: number, maxCapacite: number): Observable<Foyer[]> {
    const url = `http://localhost:8080/Foyer/getallbycapacite/${minCapacite}/${maxCapacite}`;
    return this.http.get<Foyer[]>(url);
  }
}
