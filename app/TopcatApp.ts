import {Component, ChangeDetectorRef} from 'angular2/angular2';
import {CatBox} from './CatBox';
import * as _ from 'lodash';
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
	cats:any;

	constructor(private ref:ChangeDetectorRef) {
		this.fbRef = new Firebase('https://topcat.firebaseio.com/cats');
		this.fbRef.once('value', snapshot => {
			this.cats = _.values(snapshot.val());
			this.ref.detectChanges();
		});
	}
}
