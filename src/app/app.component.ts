import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';
}
