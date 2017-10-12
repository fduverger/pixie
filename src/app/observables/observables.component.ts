import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/timeInterval';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  myObservable: Observable<string>;
  mySubject: Subject<string>;
  observableVal: string = "";
  subjectVal: string = "Wait for it...";

  constructor() {
    this.myObservable = Observable.create((observer) => {
      observer.next("I start as A");
      setTimeout(() => {
        observer.next("And I end as Z");
        observer.complete();
      }, 1000);
    });

    this.mySubject = new Subject();

    setTimeout(() => {
      this.mySubject.next("Subject changed.");
    }, 2000);
  }

  ngOnInit() {
    console.log('Subscribing...');
    this.myObservable.subscribe({
      next: x => this.handleNext(x),
      error: err => console.error(`Something went wrong: ${err}`),
      complete: () => console.log(`Done`)
    });

    this.mySubject.subscribe({
      next: x => this.subjectVal = x
    });
    console.log('Subscribe complete');
  }

  handleNext(val: string) {
    console.log(`Got value: ${val}`);
    this.observableVal = val;
  }

}
