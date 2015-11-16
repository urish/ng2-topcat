import {Component, Input} from 'angular2/angular2';

@Component({
	selector: 'cat-box',
	template: `
		<div class="topcat-box" title="{{cat.title}} by {{cat.owner}}">

			<img class="topcat-image" src="{{cat.photo}}"/>

			<div class="topcat-rating-controls">
				<a ng-click="vm.likeCat(cat)" href="">
					<i class="fa fa-thumbs-up"></i>
				</a>

				<a ng-click="vm.unlikeCat(cat)" href="">
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
	@Input() cat:any;

	constructor() {
	}
}
