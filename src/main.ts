import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HabitComponent } from './app/components/habit/habit.component';

bootstrapApplication(HabitComponent, appConfig)
  .catch((err) => console.error(err));
