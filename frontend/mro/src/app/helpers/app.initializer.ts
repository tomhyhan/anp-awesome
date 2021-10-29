import { AuthService } from '../services/auth.service';
export function appInitializer(authService: AuthService) {
  const employee = authService.employeeValue;
  return () =>
    new Promise((resolve) => {
      console.log('attemping to log in an employee...');
      authService.me().subscribe().add(resolve);
    });
}
