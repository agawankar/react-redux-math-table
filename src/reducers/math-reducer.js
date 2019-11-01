const generateMathTable = (i) => {
    let tStart = 1, tEnd = 11, tValue = [];

    for (let index = tStart; index < tEnd; index++) {
        tValue.push(index * i)
        
    }

    return tValue;
}

const resetValue = 1;

const mathReducer = (state = resetValue, action) => {

    switch(action.type){
        case 'CREATE_TABLE':
            let t = generateMathTable(action.value)
            return t;
        case 'RESET': 
            return resetValue;
        default: 
            return state;
    }
}

export default mathReducer;