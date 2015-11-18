import 'firebase';
import {map, extend} from 'lodash';

// Eventually, we will replace these with Symbols
export const ID = '$id';
export const URL = '$url';

export function toArray(snap:FirebaseDataSnapshot) {
	return map(snap.val(), (value, key) => extend({
		[ID]: key,
		[URL]: snap.ref().toString() + '/' + key
	}, value));
}
