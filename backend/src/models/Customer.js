import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    address: String,
    pnr: { type: String }, // Adding pnr support
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdBy: { type: String } // Deprecated, keeping for backward compat if needed
}, { timestamps: true });

export default mongoose.model('Customer', CustomerSchema);
