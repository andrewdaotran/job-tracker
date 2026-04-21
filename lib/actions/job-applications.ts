'use server'

import { getSession } from '../auth/auth'
import connectDB from '../db'

interface IJobApplicationData {
	company: string
	position: string
	location?: string
	notes?: string
	salary?: string
	jobUrl?: string
	columnId: string
	boardId: string
	tags?: string[]
	description?: string
}

const createJobApplication = async (data: IJobApplicationData) => {
	const session = await getSession()

	if (!session?.user) {
		return { error: 'Unauthorized' }
	}

	await connectDB()

	const {
		company,
		position,
		location,
		notes,
		salary,
		jobUrl,
		columnId,
		boardId,
		tags,
		description,
	} = data
}

export default createJobApplication
