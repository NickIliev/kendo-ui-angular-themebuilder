import { Component, Input, OnInit } from '@angular/core';
import type { Article } from '../models/articles-info';

@Component({
    selector: 'recommended-article',
    template: `
        <div width="auto" orientation="horizontal">
            <div>
                <div>{{article.author}}</div>
                <h1 kendoCardTitle>{{article.title}}</h1>
                <p kendoCardSubtitle>{{article.subtitle}}</p>
                <div>
                    <span>{{formattedDate}}</span>
                    <span class="separator"> | </span>
                    <span>{{article.minsLength}} min read</span>
                </div>
            </div>
            <div>
                <img [src]="article.imagePath" />
                <div *ngIf="article.imageText">{{article.imageText}}</div>
            </div>
        </div>
    `
})
export class RecommendedArticleComponent implements OnInit {
    @Input() public article: any; // Article

    public formattedDate = '';

    public ngOnInit(): void {
        this.formattedDate = this.article.date.toLocaleString('en-us', { month: 'short' }) + ' ' + this.article.date.getDate();
    }
}