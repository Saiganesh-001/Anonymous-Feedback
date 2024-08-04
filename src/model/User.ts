import mongoose, { Schema, Document } from "mongoose"

export interface Message extends Document {
	content: string;
	createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
})

export interface User extends Document {
	username: string;
	email: string;
	password: string;
	verifyCode: string;
	verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
        trime: true,
        unique: true
	},
	email: {
		type: String,
		required: [true, "Email is required"],
        unique:true,
        match: [/.+\@.+\..+/,"Please use a Valid Email Address"]
    	},
    password: {
        type: String,
        required: [true,"Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true,"Verify Code is required"],
    },
    verifyCodeExpiry: {
        type: Date ,
        required: [true,"Verify Code Expiry is required"],
    },
    isVerified: {
        type: Boolean,
        required: [true,"Verify Code Expiry is required"],
        default: false,
    },
    isAcceptingMessages: {
        type: Boolean,
        required: [true,"Verify Code Expiry is required"],
        default: false,
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.Users as mongoose.Model<User> || (mongoose.model<User>("User",UserSchema)));

export default UserModel;