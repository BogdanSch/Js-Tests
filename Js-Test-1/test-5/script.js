"use strict";

class Region {
  constructor(name, area, population) {
    this.name = name;
    this.area = area;
    this.population = population;
  }

  about() {
    console.log(
      `Region: ${this.name}, Area: ${this.area} sq. km, Population: ${this.population}`
    );
  }
}

class Country extends Region {
  constructor(name, area, population, capital) {
    super(name, area, population);
    this.capital = capital;
  }

  about() {
    super.about();
    console.log(`Capital: ${this.capital.name}`);
    this.capital.about();
  }
}

class City extends Region {
  constructor(name, area, population, boroughs) {
    super(name, area, population);
    this.boroughs = boroughs;
  }

  about() {
    super.about();
    console.log(`Boroughs: ${this.boroughs.join(", ")}`);
  }
}

const cityDC = new City("Washington, D.C.", 177, 705749, ["Wards"]);
const country = new Country("United States", 9833517, 331002651, cityDC);
const cityNYC = new City("New York City", 468.9, 8398748, [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
]);

country.about();
console.log("-----------------------------");
cityNYC.about();
