import mongoose , {Schema , Document } from 'mongoose';

export interface Message extends Document {
     content : String;
     createdAt : Date;
    }

    const MessageSchema : Schema<Message> = new Schema({
        content : {type : String , required : true},
        createdAt : {type : Date ,required : true , default : Date.now}
    }); 

export interface User extends Document {
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verfiyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessage :  boolean;
    messages : Message[];
}



    const UserSchema : Schema<User> = new Schema({
        username : {type : String , required : [true,"username is requird"] , unique : true , trim : true},
        password : {type : String , required : [true,"password is requird"] },
        email : {type : String , required : [true,"email is requird"] , unique : true , trim : true , lowercase : true , match : [/.+\@.+\..+/,"Please fill a valid email address"]},
        verifyCode : {type : String , required : [true,"verifyCode is requird"]},
        verfiyCodeExpiry : {type : Date , required : [true,"verfiyCodeExpiry is requird"]},
        isVerified : {type : Boolean , required : [true,"isVerified is requird"] , default : false},
        isAcceptingMessage : {type : Boolean , required : [true,"isAcceptingMessage is requird"] , default : true},
        messages : [MessageSchema]
    });

const UserModel =  (mongoose.models.User as mongoose.Model<User>)  ||   (mongoose.model<User>('User',UserSchema));

export default UserModel;

