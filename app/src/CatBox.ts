/// <reference path="Cat.ts" />

import {Component, Input, Output, EventEmitter} from 'angular2/angular2';

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
	@Output() vote = new EventEmitter<any>();

	constructor() {
	}

	upvote() {
		// Note: `next` will be renamed to `emit` in alpha.47
		this.vote.next(1);
	}

	downvote() {
		this.vote.next(-1);
	}
}
