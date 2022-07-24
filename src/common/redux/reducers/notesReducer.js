import { NOTES_ACTIONS } from "../../constants/allConstants";

// 定义初始状态值
const initialState = {
    mainTag: null
}

export default function notesReducer(currentState=initialState, action){
    // action是一个对象，需要将type和value从中取出使用
    const {type, value} = action;

    let {mainTag} = currentState;

    switch(type){
        case NOTES_ACTIONS.STORE_MAIN_TAG:{
            mainTag = value;
            return { ...currentState, mainTag}
        }
        default:{
            return { ...currentState}
        }
    }
}