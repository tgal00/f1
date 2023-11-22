import { Component } from "@angular/core";
import { Form, FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../../../assets/styles/auth.component.scss']
})
export class AuthComponent {


  public error: string = "";
  public isLogin: boolean = true;

  public form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(protected authService: AuthService) { }

  public onSubmit() {
    let username = this.form.controls["username"].value;
    let password = this.form.controls["password"].value;

    if (this.isLogin) {
      this.authService.loginUser(username, password).subscribe(res => {
        if (res.success) {

        } else {
          this.error = "Došlo je do pogreške prilikom prijave. Molimo provjerite korističko ime ili lozinku.";
        }
      });
    } else {
      this.authService.register(username, password).subscribe(res => {
        if (res.success) {

        } else {
          this.error = "Došlo je do pogreške prilikom registracije. Korisničko ime već postoji. ";
        }
      });
    }
  }
}