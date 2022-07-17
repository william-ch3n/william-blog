import { HEADER_ACTIONS } from "../../constants/allConstants";

// 定义初始状态值
const initialState = {
    showHint: false,
    tabIndex: 0
}

export default function headerReducer(currentState=initialState, action){
    // action是一个对象，需要将type和value从中取出使用
    const {type, value} = action;

    let {showHint, tabIndex} = currentState;

    switch(type){
        case HEADER_ACTIONS.SHOW_HINT:{
            showHint = value;
            return { ...currentState, showHint}
        }
        case HEADER_ACTIONS.STORE_TAB_VALUE:{
            tabIndex = value;
            return { ...currentState, tabIndex}
        }
        default:{
            return { ...currentState}
        }
    }
}