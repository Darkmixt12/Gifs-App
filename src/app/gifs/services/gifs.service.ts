import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

	public gifList: Gif[] = [] // contendra toda la lista de los gifs que vamos a mostrar

	private _tagsHistory: string [] = []
	private apiKey:       string = 'ICoR7LLKEUL9kxM46WZopDd2sILHcPJ7'
	private serviceUrl:   string = 'https://api.giphy.com/v1/gifs'

	constructor( private http: HttpClient) { 
		this.loadLocalStorage();
		console.log('Gifs Service Array')
	}

		// Retornado el arreglo vacio 
	get tagHistory(){
		return [...this._tagsHistory] // estamos usando el spreed para realizar una copia del arreglo en cuestion
	}

		// Recibe el tag desd el searchbox y si es igual a 0 no hace nada pero si no continua el ciclo
	public searchTag(tag: string): void {
    if(tag.length === 0) return;
    this.organizeHistory(tag)
		// utiliza el tag que recibe para modificar el URL y asi realizar la busqueda en base al nombre
	const params = new HttpParams()
		.set('api_key', this.apiKey)
		.set('limit', '10')
		.set('q', tag)

	this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
	.subscribe(resp => {
		this.gifList = resp.data

	//	console.log({gifs: this.gifList})
	})

		//console.log(this._tagsHistory)
	}
		// organize convierte el tag todo en minuscula ademas
  private organizeHistory(tag: string){
    tag = tag.toLocaleLowerCase();
		// si el arreglo ya contiene el valor de tag entonces 
    if (this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag)
    }


    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10)
	this.setLocalStorage();

  }

  private setLocalStorage(){
	localStorage.setItem('history',JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(){
	if(!localStorage.getItem('history'))return
	this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
	if(this._tagsHistory.length === 0 ) return;
	this.searchTag(this._tagsHistory[0])
  }
}
