# Word Search Helper

** This package is for string searching/inserting only **

## Features

- `insert(word)`: insert a word into the our words tree
- `search(word)`: search for a word. If the word is in our words tree, the returned value is true. Otherwises, it returns false.
- `startsWith(prefix)`: search for a prefix. If the prefix is in our words tree, the returned value is true. Otherwises, it returns false.
- `autoComplete(prefix)`: return the list of words that are starting with the prefix in our words tree. If we can't find any prefix, the returned value is the empty list.

## Usage

After running `npm i word-search-helper`, add the following line into the js file that needs to use this module.

`const AutoCompleter = require("word-search-helper");`

## Instantiation

Create the tree before using it: `let myTree = new AutoCompleter();`

## Insert the words into our words tree

`myTree.insert(word)`

Be caution: the function `insert` take a word each time. So if you have a list of words, you can do somehthing like this:

`listOgWords.forEach((word) => myTree.insert(word));`

## Search the word in our words tree

`const isFound = myTree.search(word)`

`isFound` either is `true` if we have the word in our words tree or `false`, otherwises.

## Search the prefix in our words tree

`const isFound = myTree.startsWith(prefix)`

`isFound` either is `true` if we have the words starting with the provided prefix in our words tree or `false`, otherwises.

## Auto complete search for the word in our words tree

For example: we have these words in our words tree:

`let words = [ "cat is eating","hello","dog","hell","cat","can","a","hel","help","helps","helping"];`

We search for every words that start with `hel`.

`const listOfWords = myTree.autoComplete(hel)`

`listOfWords` returns back the list of the words `[ 'hel', 'hell', 'hello', 'help', 'helps', 'helping']`.
