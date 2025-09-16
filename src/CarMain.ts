import { Car } from "./Car";

const audi = new Car("A3", "Audi", "Noir", 2022);
const bmw = new Car("X5", "BMW", "Blanc", 2021);
const toyota = new Car("Corolla", "Toyota", "Bleu", 2020);
const tesla = new Car("Model 3", "Tesla", "Rouge", 2023);

console.log("\n=== Audi ===");
audi.start();
audi.accelerate(40);
audi.stop();

console.log("\n=== BMW ===");
bmw.start();
bmw.accelerate(60);
bmw.accelerate(20);
bmw.stop();

console.log("\n=== Toyota ===");
toyota.start();
toyota.accelerate(30);
toyota.stop();

console.log("\n=== Tesla ===");
tesla.start();
tesla.accelerate(100);
tesla.stop();
