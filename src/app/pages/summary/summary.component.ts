import {Component, HostBinding, OnInit} from '@angular/core';
import {pageSwitchTransition} from './summary.animation';
import {SummaryService} from './summary.service';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import {START_USING_DATE, USERNAME} from '../../services/local-storage/local-storage.namespace';
import {getTodayTime, ONE_DAY} from '../../../utils/time';
import {Summary} from '../../../domain/entities';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [pageSwitchTransition]
})
export class SummaryComponent implements OnInit {
  username = this.store.get(USERNAME) || 'username';
  dateCount = Math.floor((getTodayTime() - this.store.get(START_USING_DATE)) / ONE_DAY + 1);

  @HostBinding('@pageSwitchTransition') state = 'activated';

  constructor(
    private summaryService: SummaryService,
    private store: LocalStorageService,
    private router: Router,
    private noti: NzNotificationService) {
  }

  ngOnInit() {
    this.summaryService.doSummary();
  }

  requestForDate(date: Date): Summary | null {
    return this.summaryService.summaryForDate(date.getTime());
  }

  requestForMonth(month: Date | number) {
  }

  showSummaryDetail(summary: Summary) {
    if (!summary) {
      return;
    }

    const {cCount, uCount} = summary;
    if (uCount) {
      this.noti.error('有未完成的项目', `你完成了全部任务的 ${cCount / (cCount + uCount)}%`);
    } else if (cCount) {
      this.noti.success('完成了这一天的全部任务', '干得漂亮');
    }
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }

}
