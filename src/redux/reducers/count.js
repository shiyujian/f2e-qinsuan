

const initialState = {
    tableSize: 'small'


};

export default function update(state = initialState, action) {
    switch(action.type) {
        case 'setTableSize' :
            return Object.assign({},state,{
                tableSize: action.val
            });
        default:
            return state
    }
}
