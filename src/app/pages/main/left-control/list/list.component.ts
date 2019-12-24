import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {List} from '../../../../services/domain/entities';
import {NzDropdownContextComponent, NzDropdownService, NzModalService} from 'ng-zorro-antd';
import {Subject} from 'rxjs';
import {ListService} from '../../../../services/list/list.service';
import {TodoService} from '../../../../services/todo/todo.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() isCollapsed: boolean;
  @ViewChild('listRenameInput', {static: false}) private listRenameInput: ElementRef;
  @ViewChild('listInput', {static: false}) private listInput: ElementRef;

  lists: List[];
  currentListUuid: string;
  contextListUuid: string;
  addListModalVisible = false;
  renameListModalVisible = false;

  private dropdown: NzDropdownContextComponent;
  private destroy$ = new Subject();

  constructor(
    private dropdownService: NzDropdownService,
    private listService: ListService,
    private todoService: TodoService,
    private modal: NzModalService) {
  }

  ngOnInit() {
    this.listService.lists$.pipe(takeUntil(this.destroy$)).subscribe(lists => {
      this.lists = lists;
    });

    this.listService.currentUuid$.pipe(takeUntil(this.destroy$)).subscribe(uuid => {
      this.currentListUuid = uuid;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  closeAddListModal(): void {
    this.addListModalVisible = false;
  }

  closeRenameListModal(): void {
    this.renameListModalVisible = false;
  }

  openAddListModal(): void {
    this.addListModalVisible = true;
    setTimeout(() => {
      this.listInput.nativeElement.focus();
    });
  }

  openRenameListModal(): void {
    this.renameListModalVisible = true;
    setTimeout(() => {
      const title = this.lists.find(l => l._id === this.contextListUuid).title;
      console.log(title);
      this.listRenameInput.nativeElement.value = title;
      this.listRenameInput.nativeElement.focus();
    });
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>, uuid: string): void {
    this.dropdown = this.dropdownService.create($event, template);
    this.contextListUuid = uuid;
  }

  click(uuid: string): void {
    this.listService.setCurrentUuid(uuid);
  }

  rename(title: string): void {
    this.listService.rename(this.contextListUuid, title);
    this.closeRenameListModal();
  }

  add(title: string): void {
    this.listService.add(title);
    this.closeAddListModal();
  }

  delete(): void {
    const uuid = this.currentListUuid;
    this.modal.confirm({
      nzTitle: '确认删除列表',
      nzContent: '该操作会导致该列表下的所有待办事项被删除',
      nzOnOk: () =>
        new Promise((res, rej) => {
          this.listService.delete(uuid);
          this.todoService.deleteInList(uuid);
          res();
        }).catch(() => console.error('Delete list failed'))
    });
  }
}
