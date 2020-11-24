const INITIAL_STATE = {
    app_name: "Chatt App",
}

export default (state = INITIAL_STATE,action) => {
    console.log("app_action=>", action)
    switch (action.type) {
        case "SetData":
            return ({
                ...state,
                app_name: action.type   
            })
    }
    
    // export default (state = INITIAL_STATE) => {

    return state;
};  