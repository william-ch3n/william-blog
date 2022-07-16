import { HEADER_ACTIONS } from "../../constants/allConstants"

export function actionShowHint(value){
    return {type: HEADER_ACTIONS.SHOW_HINT, value}
}

export function actionStoreTabValue(value){
    return {type: HEADER_ACTIONS.STORE_TAB_VALUE, value}
}