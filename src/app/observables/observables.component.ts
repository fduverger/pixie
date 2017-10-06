import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  myObservable: Observable<string>;
  observableVal: string = "";

  constructor() {
    this.myObservable = Observable.create((observer) => {
      observer.next("I start as A");
      setTimeout(() => {
        observer.next("And I end as Z");
        observer.complete();
      }, 1000);
    });
  }

  ngOnInit() {
    console.log('Subscribing...');
    this.myObservable.subscribe({
      next: x => this.handleNext(x),
      error: err => console.error(`Something went wrong: ${err}`),
      complete: () => console.log(`Done`)
    });
    console.log('Subscribe complete');
  }

  handleNext(val: string) {
    console.log(`Got value: ${val}`);
    this.observableVal = val;
  }

}
