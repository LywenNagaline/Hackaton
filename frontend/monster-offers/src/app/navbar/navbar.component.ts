import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import { HOME_PATH, LOGIN_PATH } from '../core/constants/app.constant';
import { AuthenticationService } from '../core/services/authentication.service';
import {Router} from "@angular/router";

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

  constructor(
    private authService : AuthenticationService,
    private router : Router
    ) { }


  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink:"/"+HOME_PATH}
  
    ];
  }

  handleLogout(){
    /* console.log('logout'); */
    this.authService.logout();
    this.router.navigateByUrl("/"+LOGIN_PATH).then();
    console.log('logout');
    //this.router.navigate(['/login']);
  }


}
