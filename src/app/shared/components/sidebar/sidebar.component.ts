<<<<<<< HEAD
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
=======
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
>>>>>>> 989274f911980244eeab7cc4397029a677ded315

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
<<<<<<< HEAD
export class SidebarComponent {

  // private gifsService
  constructor( private gifsService: GifsService  ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ):void {
    this.gifsService.searchTag( tag );
  }

=======
export class SidebarComponent{
  @ViewChild('txtTagInput')
  tagBtn!: ElementRef<HTMLButtonElement>;

  constructor(private gifsService: GifsService ){}


  get tags(): string[] {
    return this.gifsService.tagHistory
  }

  callHistory(newTag: string): void{
    this.gifsService.searchTag(newTag)
  }
>>>>>>> 989274f911980244eeab7cc4397029a677ded315
}
