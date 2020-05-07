const isEqual = (obj1,obj2) => {
    const obj1Keys=Object.keys(obj1);
    const obj2Keys=Object.keys(obj2);

    if(obj1Keys.length !== obj1Keys.length){
        return false;
    }

    for (let objkey of obj1Keys){
        if (obj1[objkey] !== obj2[objkey]){
            return false;
        }
        
    }

    return true

};

const obj1={
    name:"vasudha",
    age:21
}

const obj2={
    name:"srinidhi",
    age:18
}


 if(isEqual(obj1,obj2)==false){
    console.log("expected",obj1 );
    console.log("but got",obj2 );

 }