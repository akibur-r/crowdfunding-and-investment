import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


// @desc     Auth user/set token
// route     POST /api/users/auth
// @access   public
const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user =await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        const accessToken=generateToken(res,user._id);
        console.log(accessToken);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            email: user.email,
            accessToken
        });
    }else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
});
// @desc     Register a new user 
// route     POST /api/users
// @access   public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phoneNumber, confirmPassword } = req.body;

    
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Password and confirm password do not match"
        });
    }

    const allowedDomains = ['gmail.com', 'email.com', 'yahoo', 'outmail'];
    const emailDomain = email.split('@')[1];
    if (!allowedDomains.includes(emailDomain)) {
        return res.status(400).json({
            message: "Email domain is not correct"
        });
    }

    if (password.length <= 8) {
        return res.status(400).json({
            message: "Password must be more than 8 characters"
        });
    }


    const user = await User.create({
        name,
        phoneNumber,
        email,
        password
    });
    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc     Logout User 
// route     POST /api/users/logout
// @access   public
const logoutUser=asyncHandler(async(req,res)=>{
    res.cookie('jwt',' ',{
        httpOnly:true,
        expires: new Date(0),
    });
    res.status(200).json({
        message:'User logged out'
    });
});

// @desc     Get user profile 
// route     GET /api/users/profile
// @access   private
const getUserProfile=asyncHandler(async(req,res)=>{
    const user={
        _id:req.user._id,
        name: req.user.name,
        email: req.user.email,
        phoneNumber: req.user.phoneNumber
    };
    res.status(200).json(user);
});

// @desc     Update user profile 
// route     PUT /api/users/profile
// @access   private
const updateUserProfile=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id);
    if(user){
        user.name=req.body.name || user.name;
        user.email=req.body.email || user.email;
        user.phoneNumber=req.body.phoneNumber || user.phoneNumber;
        if(req.body.password){
            user.password=req.body.password;
        }
        const updateUser=await user.save();
        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email:updateUser.email,
            phoneNumber:updateUser.phoneNumber
        });
    } else{
        res.status(404);
        throw new Error("User not found");
    }
});

export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};