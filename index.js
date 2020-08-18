const driver = {
  name: 'Sam',
  age: 30
};
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
  const newdriver = Object.assign({},driver);
  delete newdriver[key];
  return newdriver;
}
const driver3 = deleteFromDriverByKey(driver,'name');
console.log(driver);
console.log(driver3);

function destructivelyDeleteFromDriverByKey(driver,key) {
  Object.assign({},driver);
  delete driver[key];
  return driver;
}
const driver4 = destructivelyDeleteFromDriverByKey(driver,'name');
console.log(driver);
console.log(driver4);