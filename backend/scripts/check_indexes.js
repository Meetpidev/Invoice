import 'dotenv/config';
import mongoose from 'mongoose';

const checkIndexes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const collection = mongoose.connection.collection('businessprofiles');
        const indexes = await collection.indexes();
        console.log('Final Indexes:', indexes.map(i => i.name));
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.connection.close();
    }
};

checkIndexes();
