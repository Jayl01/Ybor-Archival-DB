import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './app.component';
import { ArtifactPreviewComponent } from './Components/artifact-preview/artifact-preview';

export const routes: Routes = [
  { path: '', title: 'home', component: MainAppComponent },
  { path: '/artifact-preview', title: 'ArtifactPreview', component: ArtifactPreviewComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
