import {Component, OnInit, ViewChild} from '@angular/core';
import {TodoComponent} from './todo/todo.component';

@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.scss']
})
export class RightControlComponent implements OnInit {
  @ViewChild(TodoComponent, {static: true}) public todoList: TodoComponent;

  constructor() {
  }

  ngOnInit() {
  }

  add(title: string) {
    this.todoList.add(title);
  }
}
