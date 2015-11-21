import {Injectable, EventEmitter} from 'angular2/angular2';
import * as Firebase from 'firebase';
import * as _ from 'lodash';

@Injectable()
export class CatModel {
	private fbRef:Firebase;
	catsUpdated = new EventEmitter<Cat[]>();

	constructor() {
		this.fbRef = new Firebase('https://topcat.firebaseio.com/cats');
		this.fbRef.on('value', snapshot => {
			const cats = <Cat[]>_.values(snapshot.val());
			// Note: `next` will be renamed to `emit` in alpha.47
			this.catsUpdated.next(cats);
		});
	}

	updateCat(cat) {
		this.fbRef.child(cat.id).set(cat);
	}
}
