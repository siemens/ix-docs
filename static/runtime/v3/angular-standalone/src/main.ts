import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
