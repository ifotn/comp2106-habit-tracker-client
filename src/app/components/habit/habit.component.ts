import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

export class Habit {
  _id: string | undefined;
  name: string | undefined;
  category: string | undefined;
  description: string | undefined;
};

@Component({
  selector: 'app-habit',
  imports: [NgFor],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css'
})
export class HabitComponent {
  HABITS: Habit[] = [
    { _id: 'abc123', name: 'Teach Lesson', category: 'School', description: 'Fun!' },
    { _id: 'def456', name: 'Recycling', category: 'Home', description: 'Tuesdays' },
    { _id: 'ghi890', name: 'Workout', category: 'Health', description: 'To stay fit' }
  ]
}
