import {Routes} from '@angular/router';
import { ArtifactPreviewComponent } from './app/Components/artifact-preview/artifact-preview'; 
import { MainAppComponent } from './app/app.component';



export const routes: Routes = [
  // {
  //   path: '',
  //   title: 'App Home Page',
  //   component: MainAppComponent,
  // },
  {
    path: 'artifact-preview/:accession',
    title: 'Article',
    component: ArtifactPreviewComponent,
  },
];
