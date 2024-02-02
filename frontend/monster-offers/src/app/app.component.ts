import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {JobOfferComponent} from "./job-offer/job-offer.component";
import {MonsterComponent} from "./monster/monster.component";
import { MockJobOfferComponent } from './mock-job-offer/mock-job-offer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, LoginComponent, JobOfferComponent, MockJobOfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monster-offers';

  //ngOnChanges()
}
