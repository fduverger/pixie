import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'app';
  greeting: string;
  from: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:4000/api/hello').subscribe(data => {
      console.log(`Received data from API: ${JSON.stringify(data)}`);
      this.greeting = data["greeting"];
      this.from = data["from"];
    });
  }
}
