import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './angular-material/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromedioComponent } from './dashboard/promedio/promedio.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BancoComponent } from './dashboard/banco/banco.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PromedioComponent,
    PageNotFoundComponent,
    BancoComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent,
      children: [
        {path: 'promedio', component: PromedioComponent},
        {path: 'banco', component: BancoComponent}
      ]
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
