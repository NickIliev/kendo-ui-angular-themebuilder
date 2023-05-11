import { Component, Input, OnInit } from '@angular/core';
import type { Article } from '../models/articles-info';

@Component({
    selector: 'trending-article',
    template: `
        <div class="article k-d-flex">
            <div class="article-position k-d-inline-flex k-text-primary k-font-weight-bold">0{{position}}</div>
            <div class="article-description k-d-flex-col">
                <div class="author">{{article.author}}</div>
                <div class="title k-font-weight-bold">{{article.title}}</div>
                <div class="date k-d-flex">
                    <div>{{formattedDate}}</div>
                    <div class="separator">|</div>
                    <div>{{article.minsLength}} min read</div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .k-grid-layout {
            width: 870px;
            margin: auto;
        }

        .article {
            gap: 16px;
            color: #656565;
        }

        .article-description { gap: 6px; }

        .article-description .date,
        .card-article-description .date {
            font-size: 10px;
            line-height: 20px;
        }

        .article-description .separator,
        .card-article-description .separator {
            padding: 0 5px;
        }

        .article-position { font-size: 32px; }

        .article-description .title {
            font-size: 14px;
            line-height: 20px;
        }

        .article-description .author {
            font-size: 12px;
            line-height: 20px;
        }
    ` ]
})
export class TrendingArticleComponent implements OnInit {
    @Input() public position: number | undefined;
    @Input() public article: any;

    public formattedDate = '';

    public ngOnInit(): void {
        this.formattedDate = this.article.date.toLocaleString('en-us', { month: 'short' }) + ' ' + this.article.date.getDate();
    }
}