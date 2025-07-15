import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  router = inject (Router)
  monsterService = inject (MonstersService)

}
