import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
      const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "120d", 
      })

      res.cookie("jwt", token,{
        
        
        httpOnly: true, 
       sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
         secure: process.env.NODE_ENV === "production",
         maxAge: 120 * 24 * 60 * 60 * 1000,
 
    })
}

export default generateTokenAndSetCookie;