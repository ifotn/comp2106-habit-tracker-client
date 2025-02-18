import { Routes } from '@angular/router';
import { HabitComponent } from './components/habit/habit.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'habits', component: HabitComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent}
=======
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '/habits', component: HabitComponent },
    { path: '/', component: AppComponent }
>>>>>>> 3275907f7ed2ef64cf88ec225dfc238af4f05ad5
];
