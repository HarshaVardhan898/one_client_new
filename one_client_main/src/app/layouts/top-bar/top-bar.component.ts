import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  showUserProfile: boolean = false;
  userDetails: any;
  ngOnInit(): void {
    this.userDetails = JSON.parse(this.localStorageService.getItem('userDetails'))
    console.log(this.userDetails, 'user details 166')
  }

  openUserProfile() {
    this.showUserProfile = !this.showUserProfile;
  }

  signOutProfile() {
    this.localStorageService.remove();
    window.location.reload();
  }

}
