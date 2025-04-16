function getStringSizeInBytes(str) {
    const blob = new Blob([str]);
    return blob.size;
  }
  
  
  const inputString = "<br>4.)Santosh Paswan";
  const sizeInBytes = getStringSizeInBytes(inputString);
  console.log(`The size of the string "${inputString}" is ${sizeInBytes} bytes.`);
