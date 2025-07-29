import {Routes} from '@angular/router';
import { ArtifactPreviewComponent } from './app/Components/artifact-preview/artifact-preview'; 
import { MainAppComponent } from './app/app.component';
import { ArtifactEditComponent } from './app/Components/artifact-edit/artifact-edit'; 

export const routes: Routes = [
  // {
  //   path: '',
  //   title: 'App Home Page',
  //   component: MainAppComponent,
  // },
  {
    path: 'artifact-preview/:accession',
    title: 'Artifact Preview',
    component: ArtifactPreviewComponent,
  },
  {
    path: 'artifact-edit/:accession',
    title: 'Article Edit',
    component: ArtifactEditComponent,
  },
];
