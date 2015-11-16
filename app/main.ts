// This polyfill is required for Typescript Decorators
import 'reflect-metadata';

import {bootstrap, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS} from 'angular2/angular2';

import {TopcatApp} from './TopcatApp';

bootstrap(TopcatApp, []);
