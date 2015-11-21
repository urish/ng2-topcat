// This polyfill is required for Typescript Decorators
import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from 'angular2/angular2';

import {TopcatApp} from './TopcatApp';

bootstrap(TopcatApp, []);
