import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticlesProvider } from "./../../providers/articles/articles";

@Component({
  selector: 'page-article-index',
  templateUrl: 'article-index.html',
})
export class ArticleIndexPage {
  articles: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private articlesProvider: ArticlesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleIndexPage');
  }

  ngOnInit():void {
    this.articlesProvider.all().subscribe(data => {
      this.articles = data;
    });
  }

}
