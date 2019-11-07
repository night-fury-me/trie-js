class TrieNode {
    constructor(key, end_word) {
        this.key = key;
        this.end_word = end_word;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root;
    }
    add_word(word) {
        let curr_node = (this.root = !this.root ?
            new TrieNode("$", false) :
            this.root);

        let char_arr = Array.from(word);

        for (let i = 0; i < char_arr.length; i++) {
            let curr_char = char_arr[i];
            let end_word = i === char_arr.length - 1;

            if (!curr_node.children[curr_char]) {
                let n_node = new TrieNode(curr_char, end_word);
                curr_node.children[curr_char] = n_node;
                curr_node = curr_node.children[curr_char];
            } else {
                curr_node = curr_node.children[curr_char];
            }
        }

        curr_node.end_word = true;
    }

    search_word(word) {
        let curr_node;

        if (!this.root) return false;
        else curr_node = this.root;

        let char_arr = Array.from(word);

        for (let i = 0; i < char_arr.length; i++) {
            let curr_char = char_arr[i];
            if (!curr_node.children[curr_char]) return false;
            else {
                curr_node = curr_node.children[curr_char];
            }
        }

        return curr_node.end_word;
    }

    delete_word(word) {
        let char_arr = Array.from(word);
        let curr_node = this.root;

        if (!curr_node) return;
        this.root = this.__delete_word__(curr_node, char_arr, 0);
    }

    __delete_word__(curr_node, char_arr, depth) {
        if (!curr_node) return curr_node;

        if (depth == char_arr.length) {
            if (curr_node.end_word) curr_node.end_word = false;
            return curr_node;
        }

        let curr_char = char_arr[depth];
        curr_node.children[curr_char] = this.__delete_word__(
            curr_node.children[curr_char],
            char_arr,
            depth + 1
        );

        return curr_node;
    }
}

module.exports = Trie;