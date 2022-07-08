import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { KingModule} from './king/king.module'

import { DropdownModule } from 'primeng/dropdown'
import { PanelMenuModule } from 'primeng/panelmenu'
import { BreadcrumbModule } from 'primeng/breadcrumb'
import { CardModule } from 'primeng/card'
import { WelcomeComponent } from './welcome/welcome.component'
import { AComponent } from './a/a.component'
import { BComponent } from './b/b.component'
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component'
import { TestComponent } from './test/test.component'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AComponent,
    BComponent,
    MainComponent,
    LoginComponent,
    TestComponent,
  ],
  imports: [
    KingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    PanelMenuModule,
    FormsModule,
    BreadcrumbModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
