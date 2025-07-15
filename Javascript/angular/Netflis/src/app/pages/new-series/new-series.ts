
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-new-series',
  imports: [ReactiveFormsModule],
  templateUrl: './new-series.html',
  styleUrl: './new-series.css'
})
export class NewSeries {

  formulario:FormGroup = new FormGroup({
    title: new FormControl(),
    creator: new FormControl(),
    rating: new FormControl(),
    dates: new FormControl(),
    image: new FormControl(),
    channel: new FormControl(),
  });

  seriesService = inject(SeriesService)

  async onSubmit(){
    const response = await this.seriesService.createNew(this.formulario.value);
    console.log(response)
  }

}
