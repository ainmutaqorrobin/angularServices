import { Component, Input } from '@angular/core';
import { LoggingServices } from '../logging.service';
import { AccountServices } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingServices, AccountServices],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logServices: LoggingServices,
    private accountService: AccountServices
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status)
    this.logServices.logStatusChange(status);
  }
}
