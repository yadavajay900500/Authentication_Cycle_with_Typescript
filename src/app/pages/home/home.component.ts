import { Component, OnInit } from '@angular/core';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private signInsignUpService:SignInSignUpService) { }

  pieChart:any=[]
  ngOnInit(): void {
    this.pieChart=this.signInsignUpService.highcharts()
  }



}
