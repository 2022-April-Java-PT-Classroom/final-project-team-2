import { MdDeleteForever } from 'react-icons/md';
import style from '../../components/notes/style.module.scss'

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className={style.note}>
			<span>{text}</span>
			<div className={style.noteFooter}>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className={style.deleteIcon}
					size='2em'
				/>
			</div>
		</div>
	);
};

export default Note;