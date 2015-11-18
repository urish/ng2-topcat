/// <reference path="Cat.ts" />

import {Component, Input} from 'angular2/angular2';

@Component({
	selector: 'cat-box',
	template: `
		<div class="topcat-box" title="{{cat.title}} by {{cat.owner}}">

			<img class="topcat-image" src="{{cat.photo}}"/>

			<div class="topcat-rating-controls">
				<a (click)="upvote()">
					<i class="fa fa-thumbs-up"></i>
				</a>

				<a (click)="downvote()">
					<i class="fa fa-thumbs-down"></i>
				</a>

				<span class="topcat-votes">
					<i class="fa fa-heart"></i>{{cat.votes}}
				</span>
			</div>
		</div>
	`
})
export class CatBox {
	@Input() cat:Cat;

	constructor() {
	}

	upvote() {
		this.updateVotes(this.cat.votes + 1);
	}

	downvote() {
		this.updateVotes(this.cat.votes - 1);
	}

	private updateVotes(newValue:number) {
		new Firebase(this.cat.$url).update({
			votes: newValue
		})
	}
}
