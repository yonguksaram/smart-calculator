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
      for(var i=this.result.length-2;i>0;i--) {
        if(["+","-","*","/"].indexOf(this.result[i])>0){
      this.result = this.result.substring(0,i+1)+"Math.pow("+this.result.substring(i+1)+","+number+")";
      break
        }
      }
        return this
    }

    calculate(){
      return calculateString(this.result);
    }
  }

module.exports = SmartCalculator;
