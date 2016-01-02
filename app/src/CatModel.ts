import {Injectable, EventEmitter} from 'angular2/core';
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
			this.catsUpdated.emit(cats);
		});
	}

	updateCat(cat) {
		this.fbRef.child(cat.id).set(cat);
	}
}
