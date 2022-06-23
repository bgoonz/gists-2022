class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  // Insert data
  setItem(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);

    return index;
  }

  // Search data
  getItem(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return null

    for (const [hashKey, hashValue] of this.buckets[index]) {
      if (hashKey === key) return hashValue;
    }
  }
}

const hashTable = new HashTable();

// Insert data to the hash table
hashTable.setItem("A", "This is A");
hashTable.setItem("B", "This is B");
hashTable.setItem("C", "This is C");

// get data from the hash table 
console.log(hashTable.getItem("C"));