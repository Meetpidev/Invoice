import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
    companyName: { type: String, default: 'My Company' },
    companyEmail: String,
    companyPhone: String,
    companyAddress: String,
    companyLogoUrl: String,
    taxRate: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' }
}, { timestamps: true });

export default mongoose.model('Settings', SettingsSchema);
