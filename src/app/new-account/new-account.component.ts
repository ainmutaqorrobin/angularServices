import { Component } from '@angular/core';
import { LoggingServices } from '../logging.service';
import { AccountServices } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingServices, AccountServices],
})
export class NewAccountComponent {
  constructor(
    private logService: LoggingServices,
    private accountService: AccountServices
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);
  }
}
