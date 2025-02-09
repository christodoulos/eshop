import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DropdownComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
