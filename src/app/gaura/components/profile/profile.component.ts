import {Component, OnInit} from '@angular/core';
import {UserService} from '@candiman/website';

@Component({
  selector: 'gm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.authorizedUser = null;
    this.userService.userSubject.next(null);
  }
}
