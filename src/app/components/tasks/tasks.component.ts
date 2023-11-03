import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task;
  date: Date;
  desc;
  constructor(){}

  ngOnInit(): void {
      
  }
  onSubmit() {
    //console.log(this.date);
    this.task='';
    this.date=null;
    this.desc='';
  }

  onClick($event) {
    //console.log('Button clicked', $event);
    //$event.preventDefault()
  }

  

}
