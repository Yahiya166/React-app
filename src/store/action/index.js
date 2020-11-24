const set_data = (data) => {
    return (dispatch) => {

        dispatch({
            type: "My App",
            data: data
        })
        // console.log("Hello")
    }
}



export {
    set_data
}