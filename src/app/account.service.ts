import { EventEmitter, Injectable } from '@angular/core';
import { LoggingServices } from './logging.service';

@Injectable()
export class AccountServices {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();
  constructor(private loggingServices: LoggingServices) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingServices.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingServices.logStatusChange(status);
  }
}
