/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);


  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */



var Tree = function(value) {
  this.value = value;
  this.children = [];
};


// Map Method (Psuedoclassical)
Tree.prototype.map = function(callBack) {

  // Initialize a New Tree (We cannot Modify the Original)
  // Create New Tree using the New Construtor Function
  var newTree = new Tree('newTree');

  // Using Recursion, find the Initial Value and the Iterat through the Children Nodes Array
  // Apply the Recursion to the newly constructed Tree
  var searchTree = function(newTree){

    // BASE CASE
    // Assign the New Value with the Call Back function to the value to the Tree Copy
    // Check if the Node has a Value
    if(this.value !== undefined){
      // Apply the Call Back function of the Node's Value to New Tree
      newTree.value = callBack(this.value);
    }

    // RECURSIVE CASE
    // Iterate through the Children Array to find Nodes
    // Check if the Node has a Children Array
    if(this.children.length > 0){
      for(var i = 0; i < this.children.length; i++){
        // Use the Recursive searchTree Function to apply it to the Children Array
        // Push the Applied Callback values to the New Children Array to New Tree
        newTree.children.push(searchTree(this.children));
      }
    }
    // Return the New Tree
    return newTree;
  }
};


// Mostly Complete: I believe the Recursive function works, but there seems to
// be something wrong with the implementation of my constructor function
