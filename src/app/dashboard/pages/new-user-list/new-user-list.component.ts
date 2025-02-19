import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-new-user-list',
  templateUrl: './new-user-list.component.html',
  styleUrls: ['./new-user-list.component.scss']
})


export class NewUserListComponent implements OnInit {

  email: any
  newApplication: any;
  id: any;
  body: any;
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.userData()
  }

  userData(){
    this.adminService.allNewUser()
      .subscribe({
        next: (res: any) => {
          this.newApplication = res.data
          this.id = this.newApplication._id
        },
        error: (e) => {
          console.log("Something Wrong !", e)
        }
      })
  }

  
  accountApproves(body: any) {
    const data = {
      _id: body,
      action: {
        role: "admin",
        status: "Approved",
        statusBy: "Ajay Yadav",
      }
    }
    this.adminService.accountApproved(data).subscribe({
      next: (r: any) => {
        console.log("?????????????????",r)
        this.userData()
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  accountPendding(body: any) {
    const data = {
      _id: body,
      action: {
        role: "admin",
        status: "Pending",
        statusBy: "Ajay Yadav",
      }
    }
    this.adminService.accountApproved(data).subscribe({
      next: (r: any) => {
        console.log("?????????????????",r)
        this.userData()

      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  accountRejected(body: any) {
    const data = {
      _id: body,
      action: {
        role: "admin",
        status: "Rejected",
        statusBy: "Ajay Yadav",
      }
    }
    this.adminService.accountApproved(data).subscribe({
      next: (r: any) => {
        console.log("?????????????????",r)
        this.userData()

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
