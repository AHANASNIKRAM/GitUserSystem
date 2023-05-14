import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/users.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['user', 'detail', 'account'];
  dataSource: User[] = [];

  constructor(public dialog: MatDialog, private userService: UserService) {}
  ngOnInit(): void {

 this.userService.getAllUsers().subscribe((res: any) => {
this.dataSource = res;
console.log(res);
 });
  }
  openDialog(): void {
    // const dialogRef = this.dialog.open(UserDialog, {
    //   width: '450px',
    //   data: {},
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    // });
  }
}

// @Component({
//   selector: 'user-dialog',
//   templateUrl: 'dialog.html',
// })
// export class UserDialog {
//   constructor(
//     public dialogRef: MatDialogRef<UserDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
