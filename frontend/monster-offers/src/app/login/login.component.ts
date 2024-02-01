import {Component, OnDestroy, OnInit} from '@angular/core';
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CheckboxModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
