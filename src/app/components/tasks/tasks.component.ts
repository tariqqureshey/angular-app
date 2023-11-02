import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  task;

  onSubmit() {
    console.log(this.task);
  }

  onClick($event) {
    console.log('Button clicked', $event);
  }
}
