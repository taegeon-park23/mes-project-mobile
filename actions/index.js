export const CHANGE_COMPONENT = "CHANGE_COMPONENT";
export const ADD_TAB = "ADD_TAB";
export const REMOVE_TAB = "REMOVE_TAB";

export function changeComponent(component) {
    return {
        type: CHANGE_COMPONENT,
        component: component
    }
}