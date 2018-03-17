export class User {
  constructor(
    public _id: string,
    public fullName: string,
    public email: string,
    public username: string,
    public registerDate: Date,
    public imageUrl: string
  ) { }
}
