// Car.ts

export class Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  speed: number;
  started: boolean;

  constructor(model: string, brand: string, color: string, year: number) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.speed = 0;
    this.started = false;
  }

  start(): void {
    if (!this.started) {
      this.started = true;
      console.log(`${this.brand} ${this.model} démarre...`);
    } else {
      console.log(`${this.brand} ${this.model} est déjà démarrée.`);
    }
  }

  stop(): void {
    if (this.started) {
      this.started = false;
      this.speed = 0;
      console.log(`${this.brand} ${this.model} s'arrête.`);
    } else {
      console.log(`${this.brand} ${this.model} est déjà arrêtée.`);
    }
  }

  accelerate(amount: number): void {
    if (this.started) {
      this.speed += amount;
      console.log(`${this.brand} ${this.model} accélère à ${this.speed} km/h`);
    } else {
      console.log(`Impossible d'accélérer, la voiture est arrêtée.`);
    }
  }
}
