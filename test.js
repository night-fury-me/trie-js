let Trie = require("./index.js");

let trie = new Trie();

trie.add_word("hello");
trie.add_word("world");

console.log(trie.search_word("hello") ? "Found!" : "Not Found!");
console.log(trie.search_word("hell") ? "Found!" : "Not Found!");

trie.delete_word("hello");
console.log(trie.search_word("hello") ? "Found!" : "Not Found!");