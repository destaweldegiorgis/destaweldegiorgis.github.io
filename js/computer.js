class Computer {
    constructor(ram, cpu, storage){
        this._ram = ram;
        this._cpu = cpu;
        this._storage = storage;
   }
   runProgram(program){
       console.log("running: " + program);
   }
   }// end of Computer class


class Laptop extends Computer{
       constructor(ram, cpu, storage, battery){
           super(ram,cpu,storage);
           this._battery = battery;
       }
       carryAround() {
        console.log("carrying laptop:  cpu" + this._cpu +" ram: " + this._ram + " storage: " + this._storage + " battery: " + this._battery);
       }
   }