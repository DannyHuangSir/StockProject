import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AComponent } from './a/a.component'
import { BComponent } from './b/b.component'
import { AuthGuard } from './guard/auth.guard'
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  {
    path: 'main2',
    component: MainComponent,
    children: [
      {
        path: 'welcom',
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard],
        component: WelcomeComponent,
      },
      {
        path: 'A',
        component: AComponent,
        canActivate: [AuthGuard],
        children: [
          { path: 'B', component: BComponent },
          { path: '', redirectTo: 'B', pathMatch: 'full'}
        ],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:'',
        redirectTo: 'welcom'
      }
    ],
  },
  {
    path: 'main',
    component:BComponent
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
