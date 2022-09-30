import { Component, OnInit } from '@angular/core';
import { StandaloneChildComponent } from '../standalone-child/standalone-child.component';

@Component({
  standalone: true,
  imports: [ StandaloneChildComponent ],
  selector: 'app-standalone-parent',
  templateUrl: './standalone-parent.component.html',
  styleUrls: ['./standalone-parent.component.css']
})
export class StandaloneParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}