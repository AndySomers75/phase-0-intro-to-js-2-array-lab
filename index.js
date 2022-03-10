let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(x){
    cats[cats.length] = x;

    }
// Write your solution here!
function destructivelyPrependCat(x){
    cats.splice(0,0,x);
}

function destructivelyRemoveLastCat(x){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
}

//function appendCat(name){
  //  let result = [...cats,slice];
    //result.push(name);
    //return result;
//}
function appendCat (name) {
    return [...cats, name];
  }

function prependCat(name){
    let result = [name,...cats];
    return result;
}

function removeLastCat(){
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1);
}