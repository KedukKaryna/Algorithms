class SpecialStack {
    constructor() {
        this.mainStack = [];
        this.minStack = [];
    }

    push(value) {
        this.mainStack.push(value);
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const poppedValue = this.mainStack.pop();
        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }
        return poppedValue;
    }

    getMin() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.minStack[this.minStack.length - 1];
    }

    isEmpty() {
        return this.mainStack.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.mainStack[this.mainStack.length - 1];
    }
}


const specialStack = new SpecialStack();
specialStack.push(10);
specialStack.push(20);
specialStack.push(5);
console.log(specialStack.getMin()); 
specialStack.pop();
console.log(specialStack.getMin()); 
