//BLOOM FILTER DEMONSTRATION - had kept it simple for learning purposes

class BloomFilter {
  constructor(size = 100, hashCount = 3) {
    this.size = size;
    this.bitArray = new Array(size).fill(0);
    this.hashCount = hashCount;
  }

  // A simple base hash function (polynomial rolling hash style)
  hash(item, seed) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * seed + item.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Generate k different hashes using different seeds
  getHashes(item) {
    const seeds = [17, 29, 37]; // you can generate dynamically if hashCount > 3
    const hashes = [];

    for (let i = 0; i < this.hashCount; i++) {
      const seed = seeds[i % seeds.length];
      hashes.push(this.hash(item, seed));
    }

    return hashes;
  }

  add(item) {
    const hashes = this.getHashes(item);
    for (let h of hashes) {
      this.bitArray[h] = 1;
    }
  }

  contains(item) {
    const hashes = this.getHashes(item);
    return hashes.every((h) => this.bitArray[h] === 1);
  }

  print() {
    console.log(this.bitArray.join(""));
  }
}

const bloom = new BloomFilter(20, 3);

bloom.add("ashwin");
bloom.add("mern");
bloom.add("react");

console.log(bloom.contains("ashwin")); // likely true
console.log(bloom.contains("node")); // maybe true / false
console.log(bloom.contains("python")); // probably false

bloom.print(); // view bit pattern

// A Bloom Filter is a **space-efficient probabilistic data structure** used to test whether an element is possibly
// in a set or definitely not in it. The upgraded JavaScript version above begins by initializing a fixed-size
// array (`bitArray`) of 0s, which represents our bit field, and a configurable number of hash functions (default is 3).
// To add an item, the Bloom Filter computes multiple hash values using a lightweight custom `hash` function based on
// polynomial rolling hash logic — it multiplies each character’s char code with a seed and folds it modulo the size of
// the array to stay within bounds. These hash values act as indices in the bit array where bits are set to 1. When
// checking if an item might exist (`contains` method), it recalculates the same hash values and checks if all the
// corresponding positions in the bit array are 1. If **any one bit** is 0, we can confidently say the item is *not
// present*. But if **all bits** are 1, then the item is *probably present*, acknowledging that **false positives**
// are possible (but never false negatives). The `print()` method gives a visual representation of which bits have been
// flipped. This JS implementation demonstrates the Bloom Filter’s **core mechanism** — leveraging multiple hash functions
//  and a binary array to offer fast and memory-efficient approximate membership testing. It's perfect for applications
//  where performance matters more than precision, like spell checkers, caching layers, or load balancers — and this
//  upgraded version gets you one step closer to how real-world filters work under the hood.
