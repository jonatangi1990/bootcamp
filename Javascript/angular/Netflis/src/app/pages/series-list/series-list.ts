import { Component, inject } from '@angular/core';


import { SeriesService } from './../../services/series.service';
import { ISerie } from './../../Interface/ISerie';



@Component({
  selector: 'app-series-list',
  imports: [],
  templateUrl: './series-list.html',
  styleUrl: './series-list.css'
})
export class SeriesList {

  arrSeries: ISerie[] = [];

  seriesService = inject(SeriesService);

  async ngOnInit(){
    const response = await this.seriesService.getAll();
    this.arrSeries = response

  }

}
