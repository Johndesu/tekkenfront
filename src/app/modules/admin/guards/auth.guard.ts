import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../account/services/auth.service';
import jwt_decode from 'jwt-decode'
import { environment } from 'src/environments/environment';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if authentication is enabled
  if (!environment.authEnabled) {
    console.log('Auth Disabled. Development Mode');
    return true; // Authentication is disabled, allow access
  }

  console.log(environment.authEnabled);

  const user = authService.getUser();
  
  // Check for the JWT Token aka if logged in
  let token = cookieService.get('Authorization');

  if (token && user) {
    token = token.replace('Bearer ', '');
    const decodedToken: any = jwt_decode(token);

    // Check if token has expired
    const expirationDate = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    // Token is expired
    if (expirationDate < currentTime){
      authService.logout();
      return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
    } 

    // Token is still valid
    if (user.roles.includes('Writer')){
      return true;
    } else {
      alert('Unauthorized');
      return false;
    }

  } else {
    // Logout
    authService.logout();
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
  }

};
