import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { BehaviorSubject, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(protected http: HttpClient, protected router: Router) { }

  public loginUser(username: string, password: string) {
    return this.http.post<{ success: boolean, user: User }>("http://localhost:8080/auth/login",
      { username: username, password: password }).pipe(tap(res => {
        if (res.success) {
          this.performLogin(res.user)
        }
      }));
  }

  public register(username: string, password: string) {
    return this.http.post<{ success: boolean, user: User }>("http://localhost:8080/auth/register",
      { username: username, password: password }).pipe(tap(res => {
        if (res.success) {
          this.performRegister();
        }
      }));
  }

  private performLogin(user: User) {
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.router.navigate(["/"])
  }

  private performRegister() {
    this.router.navigate(["/"])
  }

  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem("userData")!);
    if (!userData) {
      return;
    }
    const loadedUser: User = userData;
    if (loadedUser) {
      this.user.next(loadedUser);
    }
  }

  getUser() {
    const userData: User = JSON.parse(localStorage.getItem("userData")!);
    if (userData) {
      return userData;
    }
    else {
      return null;
    }
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem("userData");
    this.router.navigate(["/auth"]);
  }

}