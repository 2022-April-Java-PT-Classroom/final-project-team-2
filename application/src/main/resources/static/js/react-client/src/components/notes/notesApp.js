import { useEffect, useState } from 'react';

import NotesList from '../notes/list';
import { nanoid } from 'nanoid';
import style from '../notes/style.module.scss'

const NotesApp = () => {
	const [notes, setNotes] = useState([
		
		{
			id: nanoid(),
			text: 'I love this App, I can express what I think and leave a sticky note for myself',
			date: '07/31/2022',
		},
		{
			id: nanoid(),
			text: 'I need more time to keep learning React.js',
			date: '07/31/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={style.bodyNotes}>
			<div className={style.container}>
                <div className={style.notesTitle}>Here you can write anything you want!</div>
			
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default NotesApp;