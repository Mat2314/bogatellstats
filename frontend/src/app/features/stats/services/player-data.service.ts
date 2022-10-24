import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  fullAddress(path: string): string {
    return this.apiUrl + path;
  }

  getPlayerData(id: string) {
    
  }
}
