import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EstadisticaServiceProvider} from "../providers/estadistica-service/estadistica-service";

import { TabsPage } from '../pages/tabs/tabs';
import {User} from "../models/user.model";
import {Activity} from "../models/activity";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  users: Array<User> = [];
  activities: Array<Activity> = [];
  mesos: Array<string> = [];



  public doughnutChartLabels:string[] = this.mesos
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

    // events
      public chartClicked(e:any):void {
        console.log(e);
      }

      public chartHovered(e:any):void {
        console.log(e);
      }
  //

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private service: EstadisticaServiceProvider  ) {      }

  ngOnInit() {
    this.getUsers();
    this.goTochart(1)
  }

  private getUsers() {
    this.service.getAllUsers().subscribe(
      data =>{
         this.users = data;
        }
    );
  }

  goTochart(id){
    this.service.getActivitatPerUsuari(id).subscribe(
      data =>{
        this.activities = data;
        console.log("Monstrant el activity",this.activities)

        let mesos = this.activities.map((x) => { return x.mes; });
        console.log("mesos", mesos);
        this.doughnutChartLabels = mesos;
        console.log("Monstrant els mesos",this.doughnutChartLabels)

        let nomActivity = this.activities.map((y)=>{return y.nomActivitat})


      }
    )
  }





}
