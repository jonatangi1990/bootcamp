import { MonstersService } from './../../services/monsters.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IMonster } from '../../../Interface/IMonster';


@Component({
  selector: 'app-monster-list',
  imports: [RouterLink,],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css'
})
export class MonsterList {

  router = inject(Router)

  arrMonsters: IMonster[] = [];
  monstersService = inject(MonstersService);


  async ngOnInit(){
    const response = await this.monstersService.getAll();
    this.arrMonsters = response;
  }

  async onSubmit(idMonster:string) {
    
      const response = await this.monstersService.getById(idMonster);
      
      
      this.router.navigateByUrl('/monsters');
    } 

}
