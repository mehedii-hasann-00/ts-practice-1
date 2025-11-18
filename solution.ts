function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  } 
  else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } 
  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;

}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const uniqueValues: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!uniqueValues.includes(arr1[i])) {
      uniqueValues.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!uniqueValues.includes(arr2[i])) {
      uniqueValues.push(arr2[i]);
    }
  }

  return uniqueValues;
}


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const discountMultiplier = product.discount ? (1 - product.discount / 100) : 1;
    const productTotal = product.price * product.quantity * discountMultiplier;

    return total + productTotal;
  }, 0);
}

