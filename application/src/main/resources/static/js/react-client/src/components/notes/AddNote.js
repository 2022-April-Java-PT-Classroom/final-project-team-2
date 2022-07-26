import style from '../notes/style.module.scss'
import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className={style.noteNew}>
			<textarea
				rows='18'
				cols='38'
				placeholder='What are you thinking today...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className={style.noteFooter}>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className={style.save} onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;