import mongoose from 'mongoose';

export default async function conn() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(`mongodb+srv://matheus:${process.env.PASSWORD}@rbr.elfln0x.mongodb.net/?retryWrites=true&w=majority&appName=RBR`);
    
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Erro ${error}`);
  }
}
