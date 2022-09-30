import { Injectable } from '@angular/core';
import { DependencyService } from './dependency.service';

@Injectable({ providedIn: 'root' })
export class ConsumerService {
  constructor(private dependencyService: DependencyService) {}

  public do() {
    console.log('Consumer Service invoked');
  }
}
