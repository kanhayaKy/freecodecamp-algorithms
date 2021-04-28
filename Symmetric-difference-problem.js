/**
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.

Symmetric Difference Problem 
Approach : 
  - store the first array in the argument into a s1
  - Iterate through the arguments (contains arrays) from the second element.
  - For each array s in the iteration , find symmetric_difference(s1, set(s))
  - store the difference into s1

symmetric_difference :
  - store all elements of first set into output set
  - for each element in second set if element already in output remove it.
  - else add it to the output

**/

function difference(s1,s2){
  let _difference = new Set(s1)
  for(var elem of s2){
    if(_difference.has(elem)){
      _difference.delete(elem)
    }
    else {
      _difference.add(elem)
    }
  }
  
  return [..._difference];
}

function sym(...args) {
  let s1 = new Set(args[0])
  for(var s of args.slice(1)){
      s = new Set(s)
      s1 = difference(s1,s);
  }
  
  let ans =  [...s1].sort((a,b)=>a-b);
  return ans;

}

sym([1, 2, 3], [5, 2, 1, 4, 5], [5, 6, 9])
