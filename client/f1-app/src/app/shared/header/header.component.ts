import { Component } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/styles/header.component.scss']
})
export class HeaderComponent {

  public user: User | null = null;

  constructor(protected authService: AuthService) {
    this.authService.user.subscribe(res => this.user = res);
  }

  onLogout(): void {
    this.authService.logout();
  }
}
