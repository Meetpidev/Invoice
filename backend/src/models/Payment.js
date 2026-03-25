import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    razorpayOrderId: { type: String, required: true },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    status: { type: String, enum: ['created', 'captured', 'failed'], default: 'created' },
    planType: { type: String, enum: ['monthly', 'yearly'], required: true },
    createdAt: { type: String, default: () => new Date().toISOString() }
});

export default mongoose.model('Payment', PaymentSchema);
