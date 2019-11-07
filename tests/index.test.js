const Trie = require("../index.js");

describe('Trie', () => {

    let trie = new Trie()
    trie.add_word("hello");
    trie.add_word("hell");

    it('should return true if the word exists in the trie', () => {

        let result = trie.search_word("hello");
        expect(result).toBe(true);

        result = trie.search_word("hell");
        expect(result).toBe(true);
    })

    it('should return false if the word does not exist in the trie', () => {
        let result = trie.search_word("world");
        expect(result).toBe(false);

        result = trie.search_word("he");
        expect(result).toBe(false);
    })


    it('should not find the deleted words in the tried', () => {
        trie.delete_word("hell");

        let result = trie.search_word("hell");
        expect(result).toBe(false);
    })

    it('should find the word that is again inserted in the trie', () => {
        trie.add_word("hell");

        let result = trie.search_word("hell");
        expect(result).toBe(true);
    })
})