import { CalendarIcon } from '@radix-ui/react-icons';

const ReleaseDate = ({ meta }) => {
	return (
		<p className="flex gap-3">
			Release Date:
			<span className="flex items-center gap-2">
				<CalendarIcon />
				{meta?.date}
			</span>
		</p>
	);
};

export default ReleaseDate;
