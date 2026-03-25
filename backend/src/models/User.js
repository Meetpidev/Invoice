import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
    role: { type: String, enum: ['admin', 'staff'], default: 'admin' },
    planType: { type: String, enum: ['free', 'monthly', 'yearly'], default: 'free' },
    planStartDate: { type: String, default: () => new Date().toISOString() },
    planEndDate: { type: String },
    isActivePlan: { type: Boolean, default: true },
    razorpayCustomerId: String,
    pnr: { type: String }, // Adding pnr just in case they meant users too
    createdAt: { type: String, default: () => new Date().toISOString() }
});

export default mongoose.model('User', UserSchema);
