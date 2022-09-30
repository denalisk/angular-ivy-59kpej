import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DependencyService {
  constructor() {}

  public do() {
    console.log('Consumer Service invoked');
  }
}
