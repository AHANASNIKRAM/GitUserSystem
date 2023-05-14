import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  searchText: string = '';
  color = 'primary';
  public mode = 'indeterminate';
  value = 50;
  displayProgressSpinner = false;
  spinnerWithoutBackdrop = false;

  @Input() diameter?: number = 100;
  isLoading = true;
  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
  };
  dataSource: any[] = [];

  constructor(private userService: UserService) {}

  ngAfterViewInit() {}

  ngOnInit() {
    this.isLoading = true;
    this.userService.searchTestUser(this.searchText).subscribe((res: any) => {
      this.dataSource = res.items;
      this.isLoading = false;
    });
  }

  applyFilter() {
    if (this.searchText.length > 3) {
      this.isLoading = true;
      this.userService.searchUser(this.searchText).subscribe((res: any) => {
        this.dataSource = res.items;
        this.isLoading = false;
      });
    }
  }
}
