import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServices } from '../logging.service';
import { AccountServices } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logServices: LoggingServices,
    private accountServices: AccountServices
  ) {}

  onSetTo(status: string) {
    this.accountServices.updateStatus(this.id, status);
    this.accountServices.statusUpdated.emit(status);
  }
}
