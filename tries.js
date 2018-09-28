<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script>
function calculateString(str) {
  return (new Function('return ' + str))();
}

class SmartCalculator {
    constructor(initialValue){
        this.value = String(initialValue);

    }

    toString(){
        return this.calculate();
    }

    add(number){
      this.value = this.value+"+"+number;
        return this
    }

    subtract(number){
      this.value = this.value+"-"+number;
        return this
    }

    multiply(number){
      this.value = this.value+"*"+number;
        return this
    }

    devide(number){
      this.value = this.value+"/"+number;
        return this
    }

    pow(number){
      for(var i=this.value.length-2;i>0;i--) {
        if(["+","-","*","/"].indexOf(this.value[i])>0){
      this.value = this.value.substring(0,i+1)+"Math.pow("+this.value.substring(i+1)+","+number+")";
      break
        }
      }
        return this
    }

    calculate(){
      return calculateString(this.value);
    }
  }

let smartCalculator = new SmartCalculator(8);

console.log(smartCalculator.add(100)
      .add(67)
      .add(27)
      .pow(2)
);
  </script>
</body>
</html>

<!-- class SmartCalculator {
  constructor(initialValue) {
    this.numb = initialValue;
    
    return this
  }

  add(number) {
    this.numb+=number;
    return this
  }
  iii(num) {
    var b = this.add;
    return b.numb
  }
  
  
  subtract(number) {
    // this.numb-=number;
    return this.numb
  }

  multiply(number) {
    this.numb*=number;
    return this.numb
  }

  devide(number) {
    this.numb/=number;
    return this.numb
  }

  pow(number) {
    this.numb = Math.pow(this.numb,number);
    return this.numb
  }
  valueOf() { return this.numb; }
  toString() { return this.numb; }
}
let smartCalculator = new SmartCalculator(4);

console.log(smartCalculator.add(3).add(4));
  

class SmartCalculator {
  constructor(x) {
    x = new Number(x);
    x.add = function(y) {
        return new SmartCalculator(x+y);
    };
    x.subtract = function(y) {
        return new SmartCalculator(x-y);
    };
    return x;
}
}


function calculateString(str) {
  return (new Function('return ' + str))();
}

class SmartCalculator {
    constructor(initialValue){
        this.queue = [];
        this.queue[0] = initialValue;
        this.value = "";

    }

    valueOf(){
        return this.calculate();
    }

    add(number){
        this.queue.push('+');
        this.queue.push(number);
        return this
    }

    subtract(number){
        this.queue.push('-');
        this.values.push(number);
        return this
    }

    multiply(number){
        this.queue.push('*');
        this.queue.push(number);
        return this
    }

    devide(number){
        this.queue.push('/');
        this.queue.push(number);
        return this
    }

    pow(number){
        this.queue.push('Pow');
        this.queue.push(number);
        return this
    }

    calculate(){
      var result = 0;
      var ququ = this.queue.concat();
      while(true){
        Top_while:
      while(true){
      for(var d=0;d<ququ.length;i++) {
        if(ququ[i]=="Pow") {
          ququ[i-1]=Math.pow(ququ[i-1],ququ[i+1]);
          ququ.splice(i,2);
          break Top_while;
        }
      }
      var arrToString = ququ.join();
      this.value = arrToString;

      return eval(this.value);
    }
  }
    }
  }
let smartCalculator = new SmartCalculator(4);

console.log(smartCalculator.add(3).add(4));