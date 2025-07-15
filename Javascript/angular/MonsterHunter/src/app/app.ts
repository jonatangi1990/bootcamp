import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { MonsterList } from "./pages/monster-list/monster-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, MonsterList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MonsterHunter';
}
