import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            validate: {
                validator: function(email) {
                    // Regular expression to match specific email domains after @
                    const domainRegex = /^@[a-z]+\.mitsgwl.ac.in/i; // Replace example\.com with your desired domain
                    return domainRegex.test(email);
                },
                message: props => `${props.value} is not a valid email with the specified domain.`
            }
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        picturePath: {
            type: String,
            default: " ",
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        Programme: String,
        viewedProfile: Number,
        impressions: Number,
    }, 
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema)
export default User