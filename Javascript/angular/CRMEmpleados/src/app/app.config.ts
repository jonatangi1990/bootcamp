import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), //con withcomponentInputBinding podemos recoger de manera mas sencilla la parte variable del url
    provideHttpClient(
      withInterceptors([authInterceptor])//añadimos esta funcion para poder trabajar con el interceptor que creamos previamente
    ) //con esto podemos lanzar peticiones internas a nuestro back

  ]
};
