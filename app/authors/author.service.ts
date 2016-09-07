import {Injectable} from 'angular2/core';

@Injectable()
export class AuthorService {
    authors: string[] = ['Author 1', 'Author 2', 'Author 3']; 
    getAuthors(): string[] {
        // TODO: Write some http call.
        return this.authors;
    }

    addAuthor(authorName: string) {
        this.authors.push(authorName);
    }
}