import { AuthService } from '../services/auth.service';
export function appInitializer(authService: AuthService) {
  return () =>
    new Promise((resolve) => {
      // attempt to refresh token on app start up to auto authenticate
      console.log('attemping to log in an employee...');
      authService.me().subscribe().add(resolve);
    });
}
