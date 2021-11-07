import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { increment, decrement, reset } from '../counter.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})

export class MyCounterComponent {
  count$?: Observable<AppState>;

  constructor(private store: Store<{ count: AppState }>) {
    this.count$ = this.store.select("count");
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
