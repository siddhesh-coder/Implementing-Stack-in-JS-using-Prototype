function Stack(){
    this.items = [];
};

//push()
Stack.prototype.push = function(element){
    this.items.push(element);
};

//pop()
Stack.prototype.pop = function(){
    if(this.isEmpty()){
        return undefined;
    }
    return this.items.pop();
}

//isEmpty()
Stack.prototype.isEmpty = function(){
    return this.items.length === 0;
}

//peek()
Stack.prototype.peek = function(){
    if(this.isEmpty()){
        return undefined;
    }else{
        return this.items[this.items.length-1];
    }
}

//size()
Stack.prototype.size = function(){
    return this.items.length;
}

//clear()
Stack.prototype.clear = function(){
    this.items = [];
}

const stack = new Stack(); //object

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.clear());
stack

