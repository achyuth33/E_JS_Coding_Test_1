//months & seasons

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const month = readLine();

/* Please do not modify anything above this line */

  // Write your code here
  switch (month.toLowerCase()) {
      case 'december':
      case 'january':
          console.log("Winter")
          break;
      case 'february':
      case 'march':
          console.log("Spring")
          break;
      case 'april':
      case 'may':
      case 'june':
          console.log("Summer")
          break;
      case 'july':
      case 'august':
      case 'september':
          console.log("Monsoon")
          break;
      case 'october':
      case 'november':
          console.log("Autumn")
          break;
      default:
          console.log("Invalid Month")
  }
}



//employee and tax 

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const name = readLine();
  const role = readLine();
  const salary = JSON.parse(readLine());

  function Employee(name, role, salary) {
/* Please do not modify anything above this line */

    // Write your code here
    this.name=name,
    this.role=role,
    this.salary=salary,
    this.getTaxAmount=function() {
        if (this.salary<500000) {
            return this.salary*0/100
        } else if (this.salary>=500000 || this.salary<10000000) {
            return this.salary*5/100
        } else if(this.salary>=10000000) {
            return this.salary*10/100
        }
    }

  }

  const employee1 = new Employee(name,role,salary)

/* Please do not modify anything below this line */

  console.log(employee1.getTaxAmount());
}






//dialy rotines


"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const isHotWaterReady = JSON.parse(readLine());
  const isBreakfastReady = JSON.parse(readLine());

/* Please do not modify anything above this line */

  // Write your code here
  const takingshower=()=> {
      return new Promise((resolve,reject)=> {
          isHotWaterReady ? resolve("Taken Shower") : reject("Hot Water Not Ready");
      })
  }
  const havingBreakFast=()=> {
      return new Promise((resolve,reject)=> {
          isBreakfastReady ? resolve("Had Breakfast") : reject("Breakfast Not Ready");
      })
  }
  const gettingWork=()=> {
      return new Promise((resolve,reject)=> {
          resolve("Got to Work");
      })
  };
  const myPromise=async()=> {
      try {
          const first=await takingshower();
          console.log(first)
          const second=await havingBreakFast();
          console.log(second)
          const third=await gettingWork();
          console.log(third)
      } catch(e) {
          console.log(e)
      }
  }
  myPromise()
}



//CANDIDATE SELECTIONS

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const candidatesList = JSON.parse(readLine().replace(/'/g, '"'));

/* Please do not modify anything above this line */
  
  // Write your code here
  const candidates=candidatesList.filter((candidate)=> {
      if (candidate.points.every((point)=>point>75)) return candidate
  }).map((candidate)=>candidate.name)
  console.log(candidates)
}



//GET THE CJUNCK

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const myString = readLine();
  const startString  = readLine();
  const endString = readLine();

/* Please do not modify anything above this line */

  // Write your code here
  let a=myString.indexOf(startString)
  let b=myString.indexOf(endString)
  let string=myString.slice(a,b)
  console.log(string)

}