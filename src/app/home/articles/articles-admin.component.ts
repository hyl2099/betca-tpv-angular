import {Component} from '@angular/core';
import {Article} from '../shared/article.model';
import {MatDialog} from '@angular/material';
import {ArticlesCreationDialogComponent} from './articles-creation-dialog.component';
import {EMPTY, from, Observable, of, range, throwError, timer} from 'rxjs';
import {delay, take} from 'rxjs/operators';
import {ArticlesMocksService} from './articles-mocks.service';

@Component({
  templateUrl: 'articles-admin.component.html'
})

export class ArticlesAdminComponent {
  article: Article;
  title = 'Article Management';
  columns = ['code', 'description', 'retailPrice', 'stock'];
  data: Article[];

  constructor(private dialog: MatDialog, private articlesMocksService: ArticlesMocksService) {
    this.article = {description: null, provider: null, stock: null, retailPrice: null, discontinued: null, reference: null, code: null};
   // this.data = null;
  }

  search() {
    // TODO
    this.articlesMocksService.getAll().subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    // TODO
  }

  create() {
    this.dialog.open(ArticlesCreationDialogComponent);
  }

  read(article: Article) {
    // TODO
  }

  update(article: Article) {
    // TODO
  }

  delete(article: Article) {
    // TODO
  }
}