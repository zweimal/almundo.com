import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'am-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnChanges {

  @Input() score: number;
  @Input() type: 'small' | 'medium' = 'small';

  public stars: number[];

  public ngOnChanges() {
    this.stars = new Array(this.score).fill(1);
  }
}
