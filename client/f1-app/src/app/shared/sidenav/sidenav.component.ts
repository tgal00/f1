import { Component } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../../assets/styles/sidenav.component.scss']
})
export class SidenavComponent {

  isNavbarExtended: boolean = false;

  public user: User | null = null;

  constructor(protected authService: AuthService) {
    this.authService.user.subscribe(res => this.user = res);
  }

  public onSidenavToggle(){
    this.isNavbarExtended = !this.isNavbarExtended;
    if(this.isNavbarExtended){
      document.getElementById("body")!.style.marginLeft = "300px";   
    } else {
      document.getElementById("body")!.style.marginLeft = "0px";
    }
  }
}
