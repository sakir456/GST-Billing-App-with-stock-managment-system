import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
      const token = jwt.sign({userId}, process.env.JWT_SECRET)

      res.cookie("jwt", token,{
         httpOnly: true, 
       sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
         secure: process.env.NODE_ENV === "production",
         })
}

export default generateTokenAndSetCookie;