const Television = require("./television");

class SmartTV extends Television {
  constructor(brand) {
    super(brand)
    this.application = 'LiveTV';
  }
}
module.exports = SmartTV;