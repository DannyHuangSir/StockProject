import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {
  items: MenuItem[] = []
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: '待辦事項', icon: 'fa fa-home' },
      {
        label: '開戶作業',
        icon: 'fa fa-home',
        items: [{ label: 'a', routerLink: 'B' }],
      },
      { label: '待辦案件', icon: 'fa fa-home' },
    ]
  }
}
