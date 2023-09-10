import {Schema, model} from "mongoose";

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: {unique: true}
    },

    password: {
        type: String,
        required: true

    }

});

export const Admin = model("admin", adminSchema); 