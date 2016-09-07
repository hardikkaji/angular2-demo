import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    providers: [AuthorService],
    templateUrl: 'app/authors/authors.component.html'
})
export class AuthorsComponent { 
    title = 'Authors';
    authors: string[];
    authorName: string;

    constructor(private authorService: AuthorService) {
        this.authors = this.authorService.getAuthors();
    }

    addAuthor() {
        this.authorService.addAuthor(this.authorName);
    }
}