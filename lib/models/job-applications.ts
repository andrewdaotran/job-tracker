import mongoose, { Schema, Document } from 'mongoose'

interface IJobApplication extends Document {
	name: string
	columnId: mongoose.Types.ObjectId
	createdAt: Date
	updatedAt: Date
}

const JobApplicationSchema = new Schema<IJobApplication>(
	{
		name: {
			type: String,
			required: true,
		},
		columnId: {
			type: Schema.Types.ObjectId,
			required: true,
			index: true,
		},
	},
	{
		timestamps: true,
	},
)

export default mongoose.models.JobApplication ||
	mongoose.model<IJobApplication>('JobApplication', JobApplicationSchema)
