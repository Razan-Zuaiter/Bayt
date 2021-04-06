//*********************************  Assignment 1  *****************************************/

const arrayItem = [7,1 ,99,8 ,3];
const arrayLength =arrayItem.length;

const callBackFunction =(arrayItem ,arrayLength)=>{
  var x=[]  
  for(var i=0; i< arrayLength ;i++){ 
   if(arrayItem[i]){   
    x.push(arrayItem[i])  
   }else{   
    console.log("items are not correct => "+ arrayItem[i] + " in index " + i)   
   }
  
  }
  if(x.length == arrayLength){
    return true
  }
  
  }
  var result = callBackFunction(arrayItem,arrayLength); 

  const all =(arrayItem,callBackFunction)=>{
    if(result){
      return true;
    }else{
      return false;
    } 
  }
console.log(all(arrayItem,callBackFunction));


//*********************************  Assignment 2  *****************************************/

var nestedObject = {
  data: {
    info: {
      stuff: {
        other: {
          magicNumber: 44,
          moreStuff: {
            something: "foo2",
          },
        },
      },
    },
  },
};

const searchNestObj = (object, value) =>{
  for(var key in object ){
   if(typeof object[key] == 'object') {
    return searchNestObj(object[key],value)
   }
   if(object[key] == value){
    return true;
   }
  }
}

console.log(searchNestObj(nestedObject, "foo2"));
  