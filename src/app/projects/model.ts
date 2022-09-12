export class ProductModel {
  constructor(
    public name: string,
    public header: string,
    public description: string[],
    public links: LinkModel[],
    public warning: string
  ) {}
}

export class LinkModel {
  constructor(
    public name: string,
    public icon: string,
    public address: string
  ) {}
}

