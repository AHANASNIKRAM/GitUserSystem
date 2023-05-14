import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnInit {
  @Input() title = '';
@Input() items: any[] = [];
  searchText = '';
  isLoading = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  applyFilter() {
    if (this.searchText.length > 3) {
      this.isLoading = true;
      this.userService.searchUser(this.searchText).subscribe((res: any) => {
        this.items = res.items;
        this.isLoading = false;
      });
    }
  }
}
