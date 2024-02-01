import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {label: 'Acceuil', icon: 'pi pi-fw pi-home'},
      {label: 'Logout', icon: 'pi pi-fw pi-power-off'}
    ];
  }


}
