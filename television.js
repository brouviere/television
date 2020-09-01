class Television {
  constructor(brand) {
    this.brand = brand;
    this.initTV();
  }

  initTV() {
    this.volume = 50;
    this.channel = 1;
  }

  volUp() {
    if(this.volume < 100) {
      this.volume += 1;
    }
  }

  volDown() {
    if(this.volume > 0) {
      this.volume -= 1;
    }
  }
}
module.exports = Television;