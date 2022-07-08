import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // const observable = forkJoin({
    //   paramUrl: this.configService.getParamUrl(),
    //   test: this.test(),
    // }).subscribe((rs) => {
    //   console.log(rs.paramUrl)
    //   console.log(rs.test)
    // })
    // forkJoin(
    //   this.configService.getParamUrl(),
    //   this.test(),
    // ).subscribe(([v1, v2]) => {
    // })
    console.log('welcome component oninit');
  }

  // test(): Observable<string> {
  //   return of('test')
  // }

  open() {
    this.router.navigate(['/main/A'])
    // if (this._Kernel.smartWs) {
    //   let jsondata = this._Kernel.getDeviceAppRqJSON({
    //     action: 'FORM_OUTPUT_END',
    //     msg: {}
    //   });
    //   this._Kernel.smartWs.send(jsondata);
    // }
  }
}
