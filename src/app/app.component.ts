import { Component, OnInit } from '@angular/core'
import { HttpService } from './http.service'
import { DropdownModule } from 'primeng/dropdown'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    console.log('app')
  }
}
