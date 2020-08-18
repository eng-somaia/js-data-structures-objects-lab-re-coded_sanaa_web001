const driver = {};
function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value});
}
const driver1 = updateDriverWithKeyAndValue(driver,'name','Tom');
console.log(driver);
console.log(driver1);

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value;
  return driver;
}
const driver2 = destructivelyUpdateDriverWithKeyAndValue(driver,'name','John');
console.log(driver);
console.log(driver2);

function deleteFromDriverByKey(driver,key) {
  Object.assign({},driver,{[key]:value});
  delete driver[key];
  return driver;
}