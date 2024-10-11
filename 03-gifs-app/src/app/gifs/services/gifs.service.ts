import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

const API_KEY: string = 'pGPANAybh002EXUxvf9O5Xxt049OjkAy';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private _http: HttpClient) {
    this.loadLocalStorage();
    console.log('gifs are loaded!')
  }

  get tagsHistory() {
    // return [ ...this._tagsHistory ];
    return this._tagsHistory;
  }

  searchTag(tag: string): void {
    if (tag.length == 0) return;

    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('limit', 10)
      .set('q', tag);

    this._http
      .get<SearchResponse>(`${this._serviceUrl}/search`, { params })
      .subscribe((r) => {
        this.gifList = r.data;
      });
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 15);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }
}
