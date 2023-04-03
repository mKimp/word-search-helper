class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; ++i) {
      if (!current.children.has(word[i])) {
        current.children.set(word[i], new TrieNode());
      }
      current = current.children.get(word[i]);
    }
    current.isWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; ++i) {
      if (!current.children.has(word[i])) {
        return false;
      }
      current = current.children.get(word[i]);
    }
    return current.isWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      if (!current.children.has(prefix[i])) {
        return false;
      }
      current = current.children.get(prefix[i]);
    }
    return true;
  }

  autoCompleteHelper(current, list, currentWord) {
    if (current.isWord) {
      list.push(currentWord);
    }

    if (!current.children.keys()) {
      return;
    }

    for (const key of current.children.keys()) {
      currentWord += key;
      this.autoCompleteHelper(current.children.get(key), list, currentWord);
      currentWord = currentWord.substring(0, currentWord.length - 1);
    }
  }

  autoComplete(prefix) {
    let current = this.root;
    let list = [];
    let currentWord = "";
    for (let i = 0; i < prefix.length; ++i) {
      let children = current.children.get(prefix[i]);
      if (!children) return list;
      currentWord += prefix[i];
      current = current.children.get(prefix[i]);
    }
    this.autoCompleteHelper(current, list, currentWord);
    return list;
  }
}

let words = [
  "hello",
  "dog",
  "hell",
  "cat",
  "a",
  "hel",
  "help",
  "helps",
  "helping",
];
let trie = new Trie();
words.forEach((word) => trie.insert(word));
console.log(trie.autoComplete("dog"));
