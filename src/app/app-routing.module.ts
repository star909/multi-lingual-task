import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LanguageTranslateComponent } from './modules/language-translate/language-translate.component';

const routes: Routes = [
  { path: '', component:LanguageTranslateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
