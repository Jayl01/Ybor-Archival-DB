import {bootstrapApplication} from '@angular/platform-browser';
import { MainAppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'
import {ApplicationConfig} from '@angular/core';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
bootstrapApplication(MainAppComponent, appConfig);

