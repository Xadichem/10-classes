// Создать каласс Cars. Класс должен содержать атрибуты: марка авто, год выпуска, мощность двигателя, цвет машины. Добавить методы, которые будут выводить атрибуты. Создать класс ElectroCars, который наследует все свойства от класса Cars. У электромобилей должен быть дополнительный атрибут объем аккумулятора. Также у них должен быть дополнительный метод prompte() который должен выводить сообщение с рекламой покупки электромобиля.

class Cars {
  constructor(model, year, engine, color) {
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
  }

  showInfo() {
    return `Model: ${this.model};
  Year: ${this.year};
  Engine: ${this.engine};
   Color: ${this.color};`;
  }
}

class ElectroCars extends Cars {
  constructor(model, year, engine, color, battery) {
    super(model, year, engine, color);
    this.battery = battery;
  }

  prompte() {
    return `Sale of Nissan Mistral in Vladivostok.`;
  }
}

const nissan = new Cars("Nissan", "1997", "black", "2.7");
console.log(nissan.showInfo());

const electroCars = new ElectroCars("BYD Seal", 2022, "gray", "61.44");
console.log(electroCars.showInfo());
console.log(electroCars.prompte());
