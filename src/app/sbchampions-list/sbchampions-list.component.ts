import { Component, OnInit } from '@angular/core';
import { SbChamps } from '../SbChamps';
import { SuperBowlService } from '../super-bowl.service';

@Component({
  selector: 'app-sbchampions-list',
  templateUrl: './sbchampions-list.component.html',
  styleUrl: './sbchampions-list.component.css'
})
export class SBChampionsListComponent implements OnInit{
  sbchampions : SbChamps [] = [];
  constructor(private service:SuperBowlService){}

  ngOnInit(): void {
      this.loadChampions();
  }

  loadChampions(){
    this.service.getChamps().subscribe({
      next: data => this.sbchampions = data
    })
  };

  
}
