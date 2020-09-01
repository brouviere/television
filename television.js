class Television {
  constructor(brand) {
    this.brand = brand;
    this.initTV();
  }

  status() {
    return `${this.brand} sur la chaine ${this.channel} au volume ${this.volume}%`;
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

  changeChannel(value) {
    value > 0 && value <= 50 ? this.channel = value : null;
  }
}
module.exports = Television;