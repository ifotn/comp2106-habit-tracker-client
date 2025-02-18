import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HabitService } from '../../services/habit.service';

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
export class HabitComponent implements OnInit {
  // mock data in-memory
  // HABITS: Habit[] = [
  //   { _id: 'abc123', name: 'Teach Lesson', category: 'School', description: 'Fun!' },
  //   { _id: 'def456', name: 'Recycling', category: 'Home', description: 'Tuesdays' },
  //   { _id: 'ghi890', name: 'Workout', category: 'Health', description: 'To stay fit' }
  // ]

  constructor (private habitService: HabitService) { }

  HABITS: any;

  getHabits(): void {
    this.habitService.getHabits().subscribe(response => {
      this.HABITS = response;
    })
  }

  ngOnInit(): void {
    this.getHabits();
  }
}
