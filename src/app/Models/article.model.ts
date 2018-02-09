export class Article {
  constructor(
    public id: number,
    public title: string,
    public story: string,
    public imageUrl: string,
    public categories: Array<string>
  ) { }
}
