import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { User } from 'src/app/modules/account/models/user.model';
import { AuthService } from 'src/app/modules/account/services/auth.service';
import { environment } from 'src/environments/environment';
import {
  faDiscord,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user?: User;
  inProduction : boolean = false
  mobileMenuOpen : boolean = false

  faDiscord = faDiscord
  faTikTok = faTiktok
  faXTwitter = faXTwitter
  faYoutube = faYoutube
  
  faBars = faBars

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit() {

    // Check if authentication is enabled
    if (environment.authEnabled) {
      console.log('InProduction: ' + this.inProduction);
      this.inProduction = true;
    }    

    this.authService.user()
    .subscribe({
      next: (response) => {
        this.user = response;
      }
    });

    this.user = this.authService.getUser();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  openMobileMenu(){
    this.mobileMenuOpen === false ? this.mobileMenuOpen = true : this.mobileMenuOpen = false;
  }

}