import mongoose, { Schema, Document } from 'mongoose'

export interface IBoard extends Document {
	name: string
	userId: string
	columns: mongoose.Types.ObjectId[]
	createdAt: Date
	updatedAt: Date
}

const BoardSchema = new Schema<IBoard>(
	{
		name: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			required: true,
			index: true,
		},
		columns: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Column',
			},
		],
	},
	{
		timestamps: true, // automatically adds the createdAt and updatedAt for you so you don't have to explicitly add them to the Schema
	},
)

export default mongoose.models.Board ||
	mongoose.model<IBoard>('Board', BoardSchema)
