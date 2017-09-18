function sumFor(list){
  let retSum = 0;
  for (let i = 0; i < list.length; i += 1) {
    retSum += list[i];
  }
  return retSum;
}

function sumWhile(list){
  let retSum = 0;
  let index = 0;
  while(index < list.length){
    retSum += list[index];
    index += 1;
  }
  return retSum;
}


function sumRecursion(list, index){
  if(index < list.length) {
    return list[index] += sumRecursion(list, index + 1)
  }
  else {
    return 0;
  }
}


function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}

