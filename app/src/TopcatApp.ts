/// <reference path="Cat.ts" />

import {Component} from 'angular2/angular2';
import {CatBox} from './CatBox';
import {CatModel} from './CatModel';
import {sortedByVotes} from './utils';

@Component({
	selector: 'topcat-app',
	template: `
		<div class="topcat-container">
			<cat-box [cat]="cat" (vote)="voteForCat(cat, $event)" *ng-for="#cat of cats">
			</cat-box>
		</div>
	`,
	directives: [CatBox],
	providers: [CatModel]
})
export class TopcatApp {
	cats:Cat[];

	constructor(private model:CatModel) {
		model.catsUpdated.subscribe((cats:Cat[]) => {
			this.cats = sortedByVotes(cats);
		});
	}

	voteForCat(cat, vote) {
		cat.votes += vote;
		this.model.updateCat(cat);
	}
}
