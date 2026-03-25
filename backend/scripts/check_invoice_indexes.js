import 'dotenv/config';
import mongoose from 'mongoose';

const checkIndexes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const collection = mongoose.connection.collection('invoices');
        const indexes = await collection.indexes();
        console.log('Invoice Indexes:', indexes);
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.connection.close();
    }
};

checkIndexes();
