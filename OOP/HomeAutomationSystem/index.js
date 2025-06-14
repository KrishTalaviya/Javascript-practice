class SmartDevice{
    constructor(name) {
        if(this.constructor===SmartDevice){
            throw new Error(
              "Class is of abstract type and can't be instantiated"
            );
        }
        
    }

}