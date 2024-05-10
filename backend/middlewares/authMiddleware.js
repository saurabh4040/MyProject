import jwt from 'jsonwebtoken'

const authMiddleware = async (req,res,next) => {
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({message: "Unauthorized HTTP, token not provided"});
    }
    console.log("token form auth middleware", token);

    next();

}

export default authMiddleware