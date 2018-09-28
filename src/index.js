function calculateString(str) {
  return (new Function('return ' + str))();
}


class SmartCalculator {
    constructor(initialValue){
        this.result = String(initialValue);

    }

    toString(){
        return this.calculate();
    }

    add(number){
      this.result = this.result+"+"+number;
        return this
    }

    subtract(number){
      this.result = this.result+"-"+number;
        return this
    }

    multiply(number){
      this.result = this.result+"*"+number;
        return this
    }

    devide(number){
      this.result = this.result+"/"+number;
        return this
    }

    pow(number){
      this.result = this.result+"**"+number;
        return this
    }

    calculate(){
      return calculateString(this.result);
    }
  }

module.exports = SmartCalculator;
