//=========================== USER REGISTERATON ====================//
export const register = async (req, res, next) => {
    console.log("register")
    res.status(200).send({
        message: "Registeration working"
    })
}

//=========================== USER LOGIN ====================//
export const login = async (req, res, next) => {
    console.log("login")
    res.status(200).send({
        message: "Login working"
    })
}