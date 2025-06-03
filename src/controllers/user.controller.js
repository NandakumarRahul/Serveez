import { asyncHandler } from "../utils/asyncHanlder";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "User registered successfully"
    })
})

export {registerUser}