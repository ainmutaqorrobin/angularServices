import { Component, OnInit } from '@angular/core';
import { AccountServices } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountServices],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountServices: AccountServices) {}

  ngOnInit(): void {
    this.accounts = this.accountServices.accounts;
  }
}
