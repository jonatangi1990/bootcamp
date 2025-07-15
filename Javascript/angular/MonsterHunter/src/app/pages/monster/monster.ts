import { Component, inject, Input} from '@angular/core';
import { MonstersService } from '../../services/monsters.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IMonster } from '../../../Interface/IMonster';

@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule],
  templateUrl: './monster.html',
  styleUrl: './monster.css'
})
export class Monster {
  
  @Input() idMonster: string = '';
  monster: IMonster[] = []
  monsterService = inject (MonstersService);
  router = inject(Router)

  async onSubmit(idMonster:string) {
    
      const response = await this.monsterService.getById(idMonster);
      
      
      this.router.navigateByUrl('/monsters');
    } 

 
  
  
  }
