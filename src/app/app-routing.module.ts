import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [

  //RUTA INICIAL - RUTA RAIZ
  {path: '', pathMatch:'full', redirectTo:'/model'},
  {path: 'template', component:TemplateComponent},
  {path: 'model', component: ModelComponent},
  //RUTA DEFAULT - RUTA INDEFINIDA
  {path: '**', redirectTo: 'model'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
