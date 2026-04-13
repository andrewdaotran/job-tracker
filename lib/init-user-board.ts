import connectDB from './db'
import { Board, Column } from './models'

const DEFAULT_COLUMNS = [
	{
		name: 'Wish List',
		order: 0,
	},
	{
		name: 'Applied',
		order: 1,
	},
	{
		name: 'Interviewing',
		order: 2,
	},
	{
		name: 'Offer',
		order: 3,
	},
	{
		name: 'Rejected',
		order: 4,
	},
]

export async function initializeUserBoard(userId: string) {
	try {
		await connectDB()

		// Check if board already exists
		const existingBoard = await Board.findOne({ userId, name: 'Job Hunt' })

		if (existingBoard) {
			return existingBoard
		}

		//Create the board
		const board = await Board.create({
			name: 'Job Hunt',
			userId,
			columns: [],
		})

		// Create default columns
		const columns = await Promise.all(
			// Promise.all lets you run all of the promise operations (in our case all the creates) at the same time and it will wait until all of them are finished before continuing.
			DEFAULT_COLUMNS.map((col) =>
				Column.create({
					name: col.name,
					order: col.order,
					boardId: board._id,
					jobApplication: [],
				}),
			),
		)

		// Update the board with the new column IDs
		board.columns = columns.map((col) => col._id)
		await board.save()

		return board
	} catch (err) {
		throw err
	}
}
