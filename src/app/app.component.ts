import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/wheather.model';
import { WheatherService } from './services/wheather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private wheatherService: WheatherService){

}

  cityName: string = 'Wellington';

weatherData?: weatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  private getWeatherData(cityName: string){
    this.wheatherService.getwheatherData(cityName)
    .subscribe({
      next:(response) =>{
        this.weatherData = response;
        console.log(response)
      }
    })
  }
}
