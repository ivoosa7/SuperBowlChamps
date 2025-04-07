import { Component, OnInit } from '@angular/core';
import { SbChamps } from '../SbChamps';
import { SuperBowlService } from '../super-bowl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sbchampions-list',
  templateUrl: './sbchampions-list.component.html',
  styleUrl: './sbchampions-list.component.css'
})
export class SBChampionsListComponent implements OnInit{
  sbchampions : SbChamps [] = [];
  constructor(private service:SuperBowlService, private rota:Router){}

  ngOnInit(): void {
      this.loadChampions();
  }

  //Para carregar a função de pegar todos os itens
  loadChampions(){
    this.service.getChamps().subscribe({
      next: data => this.sbchampions = data
    })
  };

  //Alterar sb champs
  alterandosbChamps(id: Number){
    this.rota.navigate(['/newsuperbowlchampions', id]);
  }

  //Deletar Função
  deletarSbChamps(sb: SbChamps){
    this.service.deleteWrongChamps(sb).subscribe({
      next: () => this.loadChampions()
    });
  }
}
