import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IEmployee extends Document {
  nome: string;
  cargo: string;
  departamento: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const employeeSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: true
  },
},
  {timestamps: true}
)

export const Employees = mongoose.model<IEmployee>("Employee", employeeSchema)