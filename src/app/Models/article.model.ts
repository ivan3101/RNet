import {Comment} from './comment.model';

export class Article {
  constructor(
    public id: number,
    public featured: boolean,
    public title: string,
    public story: string,
    public imageUrl: string,
    public category: string,
    public comments: Array<Comment>
  ) { }
}
