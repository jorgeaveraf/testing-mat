import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  constructor(private router: Router) {}

  navegar1A() {
    this.router.navigate(['/stddev']);
  }

  navegar3A() {
    this.router.navigate(['/3A']);
  }

  navegar5A() {
    this.router.navigate(['/5A']);
  }
}
