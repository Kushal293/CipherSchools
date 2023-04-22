import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import validator from 'validator';


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "FirstName is required"],
        maxLength: [ 30, "FirstName must be less than 30 charachters  " ],
        trim: true,
    },
    lastname: {
        type: String,
        maxLength: [ 30, "LastName must be less than 30 charachters  " ],
        trim: true,
        default: "",
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
        type: String,
        required: [ true, "Password provide a password" ],
        minLength: [ 8, "Password must be more than 8 charachters" ],
        select: false,
    },
    confirmPassword: {
        type: String,
        required: [ true, "Please confirm your password" ],
        validate: {
            validator: function (confirmPassword) {
                return confirmPassword === this.password;
            },
            message: "Password did not match",
        }
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    followers: {
        type: Array,
        default: [],
    },
     profilePicture: {
      type: String,
      default: "",
    },
    mobileNumber: {
        type: Number,
    },
    interests: {
        type: Array,
        default: [],
    }
},
    {
    timestamps: true,
    });


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    this.confirmPassword = undefined;
    next();
});

userSchema.post('save', function (err, doc, next) {
    if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new Error('User already exist'));
    } else {
        next();
    }
});

userSchema.methods = {
    comparePassword: async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
    },

    getJwtToken: function () {
        return jwt.sign(
            {
            _id: this._id,
            role: this.role,
        },
            process.env.JWT_SECRET,
            {
            expiresIn: process.env.JWT_EXPIRY,
            }
        );
    },

    generateForgotPasswordToken: function () {
        
        const forgotPassToken = crypto.randomBytes(20).toString('hex');

        this.forgotPasswordToken = crypto.createHash("sha256").update(forgotPassToken).digest('hex');

        this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;

        return forgotPassToken;
    }
}

export default mongoose.model("User", userSchema);   