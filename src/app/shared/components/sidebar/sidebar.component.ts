import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
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
}
