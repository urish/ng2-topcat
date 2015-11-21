import * as _ from 'lodash';

export function sortedByVotes <T> (cats:T[]):T[] {
	return _.sortByOrder(cats, ['votes'], ['desc']);
}
