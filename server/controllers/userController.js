import asyncHandler from "../service/asyncHandler.js";
import CustomError from '../utils/customError.js';
import User from '../models/userSchema.js'

export const getUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId);
    const { updatedAt, ...userInfo } = user._doc;
    res.status(200).json({
        success: true,
        userInfo,
    });
});

export const updateUserProfile = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    if (req.body.userId === userId) {
        const user = await User.findByIdAndUpdate(userId, {
            $set: req.body,
        });
        res.status(200).json({
            success: true,
            message: "Profile has been updated",
        });
    }
})