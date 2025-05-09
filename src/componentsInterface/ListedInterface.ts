interface ListedInterface {
  id: number;
  name: string;
  subListed?: ListedInterface[];
}