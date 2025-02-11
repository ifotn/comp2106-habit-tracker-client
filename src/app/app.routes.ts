import { Routes } from '@angular/router';
import { HabitComponent } from './components/habit/habit.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '/habits', component: HabitComponent },
    { path: '/', component: AppComponent }
];
