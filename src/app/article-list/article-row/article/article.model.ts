export class Article {
  constructor(
    public title: string,
    public story: string,
    public imageUrl: string,
    public tags: Array<string>
  ) { }
}
