export class Course {
  id: number;
  title: string;
  price: number;
  desc: string;
  image: string;
  rating: number;
  duration: number;
  author: string;

  constructor(
    id: number,
    title: string,
    price: number,
    desc: string,
    image: string,
    rating: number,
    duration: number,
    author: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.image = image;
    this.rating = rating;
    this.duration = duration;
    this.author = author;
  }
}
