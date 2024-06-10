import mongoose from "mongoose"


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        usermail:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'Users'
    }
)
export const Users = mongoose.model("Users", userSchema);