import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface CreateJobApplicationDialogProps {
	columnId: string
	boardId: string
}

const CreateJobApplicationDialog = ({
	columnId,
	boardId,
}: CreateJobApplicationDialogProps) => {
	return (
		<Dialog>
			<Button asChild variant='outline'>
				<DialogTrigger>
					<Plus />
					Add Job
				</DialogTrigger>
			</Button>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add Job Application</DialogTitle>
					<DialogDescription>Track a new job application</DialogDescription>
				</DialogHeader>
				<form>
					<div>
						<div>
							<div>
								<Label> Company *</Label>
								<Input id='company' required />
							</div>
							<div>
								<Label> Position *</Label>
								<Input id='position' required />
							</div>
						</div>
						<div>
							<Label> Location</Label>
							<Input id='location' />
						</div>
						<div>
							<Label> Salary</Label>
							<Input id='salary' />
						</div>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateJobApplicationDialog
