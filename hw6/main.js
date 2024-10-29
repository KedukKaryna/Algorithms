class DynamicArray {
    constructor(capacity = 10) {
        this.size = 0; 
        this.capacity = capacity; 
        this.data = new Array(capacity); 
    }

    
    add(element) {
        if (this.size === this.capacity) {
            this._resize();
        }
        this.data[this.size] = element;
        this.size++;
    }

    _resize() {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }

    set(index, element) {
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of bounds");
        }
        this.data[index] = element;
    }


    clean() {
        this.data = new Array(this.capacity);
        this.size = 0;
    }

    contains(element) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === element) {
                return true;
            }
        }
        return false;
    }

    isEmpty() {
        return this.size === 0;
    }


    get(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of bounds");
        }
        return this.data[index];
    }


    print() {
        console.log(this.data.slice(0, this.size));
    }
}


const arr = new DynamicArray();
arr.add(1);
arr.add(2);
arr.set(1, 3);
console.log(arr.contains(3)); 
console.log(arr.isEmpty());    
console.log(arr.isEmpty());  