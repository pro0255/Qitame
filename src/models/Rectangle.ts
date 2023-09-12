export class Rectangle {
  // eslint-disable-next-line no-unused-vars
  public readonly key;

  constructor(public content: number) {
    this.key = Math.random() * content;
  }
}
