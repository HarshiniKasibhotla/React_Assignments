let numbers=[65,43,98,43,23,76,32,54,23,43]

// sorting given array
console.log("Sorted array :(increasing order) - "+array_sort(numbers) )
console.log("Sorted array : (decreasing order) - "+ array_sort(numbers).reverse())
function array_sort(arr) { 
    return arr.slice(0).sort();
  }
//finding and displaying duplicates
console.log("duplicate numbers in the array are - "+findDuplicates(numbers))

function findDuplicates(numbers)
{
    let duplicates=[]
    numbers.forEach(function(element, index) {
        if (numbers.indexOf(element, index + 1) > -1) {
          if (duplicates.indexOf(element) === -1) {
            duplicates.push(element);
          }
        }
      });
      return duplicates;
}

//Replace 76 with 175
numbers.splice(5,1,175)
console.log("after replacing the array is - "+numbers)

//Adding a new number to array
numbers.push(200)
console.log("After adding new element, array is - "+numbers)

//remove duplicates
//console.log("after removing duplicates, array is - "+removeDuplicates(numbers))
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };

//remove duplicates and copy into new array
let new_array=[]
new_array=removeDuplicates(numbers)
console.log("New array is - "+new_array)

//update all elements by multiplying 10
var numbers_updated = numbers.map(myFunction);

function myFunction(value) {
  return value * 10;
}
console.log("Updated array - "+numbers_updated)

//reverse given array as mutable
console.log("Reversed array(mutable) - "+numbers.reverse())

//reverse given array as immutable
console.log("Reversed array(immutable) - "+numbers.slice(0).reverse())


function dup_count(numbers)
{
   temp= numbers.slice(0).sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] != current) {
            if (cnt > 1) {
                console.log(current + ' comes --> ' + cnt + ' times');
            }
            current = temp[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
}
dup_count(numbers);