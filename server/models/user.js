import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String
});

const user = mongoose.model('Users', userSchema);

export default user;