import {AfterViewChecked, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalSize, SuiModalService} from 'ng2-semantic-ui';
import {CustomModal} from '../identification/CustomModal';
import {User} from '../../Models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('navbar') navbar;
  user: User;
  sessionSubscription: Subscription;
  constructor(private modalService: SuiModalService, private userService: UserService) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.sessionSubscription = this.userService.session.subscribe(value => {
      this.user = JSON.parse(localStorage.getItem('user'));
    });
  };
  ngAfterViewChecked() {
    if (sessionStorage.getItem('accessibility')) {
      if (this.navbar.nativeElement.classList.contains('red') || this.navbar.nativeElement.classList.contains('inverted')) {
        this.navbar.nativeElement.classList.remove('inverted');
        this.navbar.nativeElement.classList.remove('red');
      }
    } else {
      this.navbar.nativeElement.classList.add('inverted');
      this.navbar.nativeElement.classList.add('red');
    }
  }
  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }
  onOpenModal() {
    this.modalService
      .open(new CustomModal(ModalSize.Mini));
  }
  onLogout() {
    this.userService.logout();
  }
}
