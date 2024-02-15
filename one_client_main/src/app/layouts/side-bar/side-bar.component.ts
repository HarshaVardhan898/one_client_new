import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavItems } from './menu';
import { MenuItems } from './menu-model';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {

  menuItems: any;
  userRole: string = '';
  constructor(private route: ActivatedRoute,
    private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
    this.menuItems = NavItems;
    if (this.localStorageService.getItem('userDetails')) {
      // this.userRole =
      let userDetails = JSON.parse(this.localStorageService.getItem('userDetails'));

      this.userRole = userDetails.role;
    }
    this.getMenuItemsBasedOnUserRole()

  }
  checkIsLinkActive(item: any) {
    return true
  }

  getMenuItemsBasedOnUserRole() {
    switch (this.userRole) {
      case 'System Admin':
        this.menuItems.map((menuItem: any) => {
          if (menuItem.role === 'System Admin') {
            menuItem.display = true
          } else {
            menuItem.display = false;
          }
        })
        break;

      case 'User':
        this.menuItems.map((menuItem: any) => {
          if (menuItem.role === 'User') {
            menuItem.display = true
          } else {
            menuItem.display = false;
          }
        })
        break;

      case 'Admin':
        this.menuItems.map((menuItem: any) => {
          if (menuItem.role === 'Admin') {
            menuItem.display = true
          } else {
            menuItem.display = false;
          }
        })
        break;
    }
  }



}
