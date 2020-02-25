import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // define list of items
  title = 'ToDoList';
  task: string;
  tasks = [];


  // Write code to push new item
  addItem() {
    this.tasks.push({name: this.task});
    this.task = '';


  }

  // This function remove item
  removeItem(index) {
    this.tasks.splice(index, 1);

  }

  ngOnInit() {
  }
}




