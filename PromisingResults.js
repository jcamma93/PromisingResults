slowMath.add(6, 2)
.then(result => {
    document.write(result,",");
    return slowMath.multiply(result, 2);
}).then(result => {
    document.write(result,",");
    return slowMath.divide(result, 4);
}).then(result => {
    document.write(result,",");
    return slowMath.subtract(result, 3);
}).then(result => {
    document.write(result,",");
    return slowMath.add(result, 98);
}).then(result => {
    document.write(result,",");
    return slowMath.remainder(result, 2);
}).then(result => {
    document.write(result,",");
    return slowMath.multiply(result, 50);
}).then(result => {
    document.write(result,",");
    return slowMath.remainder(result, 40);
}).then(result => {
    document.write(result,",");
    return slowMath.add(result, 32);
}).then(result => {
    document.write(`The final result is ${result}.`);
}).catch(error => {
    console.log(error);
});


async function doMath() {
    try {
        let value1 = await slowMath.add(6, 2);
        document.write(value1,","); 
        let value2 = await slowMath.multiply(value1, 2);
        document.write(value2,",");
        let value3 = await slowMath.divide(value2, 4);
        document.write(value3,",");
        let value4 = await slowMath.subtract(value3, 3);
        document.write(value4,",");
        let value5 = await slowMath.add(value4, 98);
        document.write(value5,",");
        let value6 = await slowMath.remainder(value5, 2);
        document.write(value6,",");
        let value7 = await slowMath.multiply(value6, 50);
        document.write(value7,",");
        let value8 = await slowMath.remainder(value7, 40);
        document.write(value8,",");
        let value9 = await slowMath.add(value8, 32);
        document.write(`The final result is ${value9}`);
        
    } catch (error) {
        console.error("An error has occured.");
    }}
doMath();