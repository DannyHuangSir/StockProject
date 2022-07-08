import { Component, OnInit } from '@angular/core'
import {MenuItem} from 'primeng/api';
import { tap, concatMap, of } from 'rxjs'
import { ConfigService } from '../service/config.service'
import { KernelService } from '../service/kernel.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public items: MenuItem[] = []

  constructor(
    private configService: ConfigService,
    private kernelService: KernelService,
  ) {}

  ngOnInit(): void {
    console.log('main component oninit');
    // this.items = [
    //   { label: 'Categories', routerLink: 'welcom' },
    //   { label: 'Sports', routerLink: 'A' },
    //   { label: 'Football' },
    //   { label: 'Countries' },
    //   { label: 'Spain' },
    //   { label: 'F.C. Barcelona' },
    //   { label: 'Squad' },
    //   {
    //     label: 'Lionel Messi',
    //     url: 'https://en.wikipedia.org/wiki/Lionel_Messi',
    //   },
    // ]

    this.configService
      .getParamUrl()
      .pipe(
        tap((r) => (this.kernelService.paramUrl = r)),
        concatMap((r) => {
          return of('4')
        }),
        tap((r) => (this.kernelService.branchInfo = r)),
        concatMap((r) => of(true)),
      )
      .subscribe((rs) => {})


      console.log('參數初始化')
  }
}
