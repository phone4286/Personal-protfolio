import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [CommonModule, ButtonModule],
    templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private router: Router) {}
  goToContact() {
    this.router.navigate(['/contact']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
