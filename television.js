class Television {
  constructor(brand) {
    this.brand = brand;
    this.initTV();
  }

  initTV() {
    this.volume = 50;
    this.channel = 1;
  }
}
module.exports = Television;