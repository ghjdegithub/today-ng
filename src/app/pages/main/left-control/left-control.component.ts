// left-control.component.ts
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage/local-storage.service';
import {USERNAME} from '../../../services/local-storage/local-storage.namespace';
import {ListComponent} from './list/list.component';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.scss']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @ViewChild(ListComponent, {static: false}) listComponent: ListComponent;

  username: string;

  constructor(private store: LocalStorageService) {
  }

  ngOnInit() {
    this.username = this.store.get(USERNAME);
  }

  openAddListModal(): void {
    // 在 Angular 中调用子组件
    this.listComponent.openAddListModal();
  }

}
