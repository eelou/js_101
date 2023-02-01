function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//push will mutate 
let buffer1 = [1,2,3,4,5,6];
console.log(addToRollingBuffer1(buffer1,5,1));
console.log(buffer1);

//concat will not mutate
let buffer2 = [2,3,4,5,6]
console.log(addToRollingBuffer2(buffer2,5,1));
console.log(buffer2);