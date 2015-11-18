/// <reference path="Cat.ts" />

import {Component, ChangeDetectorRef} from 'angular2/angular2';
import {CatBox} from './CatBox';
import {toArray} from './utils/toArray';
import {sortByOrder} from 'lodash';
import * as Firebase from 'firebase';

@Component({
	selector: 'topcat-app',
	template: `
		<div class="topcat-container">
			<cat-box [cat]="cat"  *ng-for="#cat of cats"></cat-box>
		</div>
	`,
	directives: [CatBox]
})
export class TopcatApp {
	fbRef:Firebase;
	cats:Array<Cat>;

	constructor(private ref:ChangeDetectorRef) {
		this.fbRef = new Firebase('https://topcat.firebaseio.com/cats');
		this.fbRef.on('value', snapshot => {
			this.cats = sortByOrder(<Cat[]>toArray(snapshot), ['votes'], ['desc']);
			this.ref.detectChanges();
		});
	}
}
