const mongoose = require('mongoose');
const { createHmac, randomBytes } = require("crypto")
const { createTokenForUser } = require('../service/auth')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: [3, 'Text input must be at least 3 characters'],
        maxlength: [20, 'Text input must be at most 20 characters'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,

    },
    password: {
        type: String,
        required: true,
    },


}, { timestamps: true });

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return;

    const salt = randomBytes(16).toString();

    const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPassword

    next()
})




userSchema.static("matchPasswordAndGenerateToken", async function (email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac('sha256', salt).update(password).digest('hex');

    if (hashedPassword !== userProvidedHash) {
        throw new Error('Incorrect password');
    }

    const token = createTokenForUser(user)
    return token;
});


const User = mongoose.model('user', userSchema);

module.exports = User;