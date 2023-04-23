import User from '../models/userSchema.js';
import asyncHandler from '../service/asyncHandler.js';
import CustomError from '../utils/customError.js';
import crypto from 'crypto';

export const cookieOptions = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    maxAge: 3 * 24 * 60 * 60 * 1000,
}



//* --------------SignUp---------------- *//

export const signUp = asyncHandler(async (req, res) => {
    // console.log("body", req.body);
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        throw new CustomError("Please fill all fields", 400);
    }

    const exisingUser = await User.findOne({ email });

    if (exisingUser) {
        throw new CustomError("User already exist", 400);
    }

    const user = await User.create(req.body);
    
    const token = user.getJwtToken();
    user.password = undefined;

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
        success: true,
        token,
        user,
    });
    
});

//* --------------Login---------------- *//

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new CustomError("Please fill both fields", 400);
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new CustomError("Invalid credentials", 400);
    }

    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
        throw new CustomError("Invalid credentials", 400);
    }

    const token = user.getJwtToken();
        user.password = undefined;
        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            success: true,
            token,
            user,
        });
});


//* --------------LogOut---------------- *//

export const logout = asyncHandler(async (_req, res) => {
    res.clearCookie('token');

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});


//* --------------Forgot Password---------------- *//

export const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw new CustomError("User not found", 404);
    }

    const resetToken = user.generateForgotPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetUrl = `${ req.protocol }://${ req.get("host") }/api/auth/password/reset/${ resetToken }`;

    const subject = "Password reset email for website";

    const text = `Reset your password using following url \n\n${ resetUrl }\n\n`;

    const html = `<h3><b>Password Reset For Account</b></h3>`;

    try {
        
        await mailHelper({
            email: user.email,
            subject: subject,
            text: text,
            html: html,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${ user.email }`,
            text: text,
        });
    } catch (error) {
        user.forgotPasswordToken = undefined;
        user.forgotPasswordExpiry = undefined;

        await user.save({ validateBeforeSave: false });

        throw new CustomError(err.message || 'Email sent failure', 500);
    }
});


//* --------------Reset Password---------------- *//

export const resetPassword = asyncHandler(async (req, res) => {
    
    const { resetToken } = req.params;

    const { password, confirmPassword } = req.body;

    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    const user = await User.findOne({
        forgotPasswordToken: resetPasswordToken,
        forgotPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
        throw new CustomError('password token is invalid or expired', 400);
    }

    user.password = password;
    user.confirmPassword = confirmPassword; 
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined;

    await user.save();

    const token = user.getJwtToken();

    user.password = undefined;
    user.confirmPassword = undefined;

    res.cookie('token', token, cookieOptions);

    res.status(200).json({
        success: true,
        user,
    });
});

//* --------------Change Password---------------- *//

export const changePassword = asyncHandler(async (req, res) => {
    const { user } = req;
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!user) {
        throw new CustomError("User not found", 401);
    }

    const newUser = await User.findOne({ email: user.email }).select("+password");

    if (!newUser) {
        throw new CustomError("User not found", 401);
    }

    const isValidPassword = await newUser.comparePassword(currentPassword);

    if (!isValidPassword) {
        throw new CustomError("Enter a valid password");
    }

    newUser.password = newPassword;
    newUser.confirmPassword = confirmPassword;

    await newUser.save();

    const token = newUser.getJwtToken();

    newUser.password = undefined;
    newUser.confirmPassword = undefined;

    res.cookie('token', token, cookieOptions);

    res.status(200).json({
        success: true,
        newUser,
    });
})