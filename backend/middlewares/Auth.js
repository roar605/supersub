import jwt from "jsonwebtoken"
import User from "../models/UserModel.js"
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const users = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!users) {
            throw new ApiError(401, "Unauthorized request")
        }
        req.token = token
        req.user = users
        next()
    } catch (error) {
        res.send(error)
    }
}
export default auth;