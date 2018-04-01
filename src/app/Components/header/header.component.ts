import {AfterViewChecked, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CustomModal} from '../identification/CustomModal';
import {ModalSize, SuiModalService} from 'ng2-semantic-ui';
import {User} from '../../Models/user.model';
import {UserService} from '../../Services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('header') header;
  @ViewChild('menu') menu;
  @ViewChild('menu2') menu2;
  @ViewChild('menu3') menu3;
  user: User;
  sessionSubscription: Subscription;
  constructor(private modalService: SuiModalService, private userService: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.sessionSubscription = this.userService.session.subscribe(value => {
      this.user = JSON.parse(localStorage.getItem('user'));
    });
  }

  ngAfterViewChecked() {
      if (sessionStorage.getItem('accessibility')) {
        if (this.header.nativeElement.classList.contains('red')) {
          this.header.nativeElement.classList.remove('red');
        }
        if (this.menu.nativeElement.classList.contains('red')) {
          this.menu.nativeElement.classList.remove('red');
        }
        if (this.menu2.nativeElement.classList.contains('red')) {
          this.menu2.nativeElement.classList.remove('red');
        }
        if (this.menu3.nativeElement.classList.contains('red')) {
          this.menu3.nativeElement.classList.remove('red');
        }
      } else {
        if (!this.header.nativeElement.classList.contains('red')) {
          this.header.nativeElement.classList.add('red');
        }
        if (!this.menu.nativeElement.classList.contains('red')) {
          this.menu.nativeElement.classList.add('red');
        }
        if (!this.menu2.nativeElement.classList.contains('red')) {
          this.menu2.nativeElement.classList.add('red');
        }
        if (!this.menu3.nativeElement.classList.contains('red')) {
          this.menu3.nativeElement.classList.add('red');
        }
      }
  }

  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }

  onOpenModal() {
    this.modalService
      .open(new CustomModal(ModalSize.Tiny));
  }
  onLogout() {
    this.userService.logout();
  }

  onAccessibility() {
    if (sessionStorage.getItem('accessibility')) {
      sessionStorage.removeItem('accessibility');
    } else {
      sessionStorage.setItem('accessibility', 'true');
    }
  }

}
