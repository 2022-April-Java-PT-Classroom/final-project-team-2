// import { useEffect, useState } from 'react';

// import NotesList from '../notes/list';
// import { nanoid } from 'nanoid';
// import style from '../notes/style.module.scss'

// const NotesApp = () => {
// 	const [notes, setNotes] = useState([
// 		{
// 			id: nanoid(),
// 			text: 'Today is a good day to paint and create some art',
// 			date: '07/29/2022',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'I feel sad, and I dont know why',
// 			date: '07/30/2022',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'I love this App, I can express what I think and leave a sticky note for myself',
// 			date: '07/31/2022',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'I need to get more gummy bears',
// 			date: '07/31/2022',
// 		},
// 	]);

// 	const [searchText, setSearchText] = useState('');

// 	const [darkMode, setDarkMode] = useState(false);

// 	useEffect(() => {
// 		const savedNotes = JSON.parse(
// 			localStorage.getItem('react-notes-app-data')
// 		);

// 		if (savedNotes) {
// 			setNotes(savedNotes);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		localStorage.setItem(
// 			'react-notes-app-data',
// 			JSON.stringify(notes)
// 		);
// 	}, [notes]);

// 	const addNote = (text) => {
// 		const date = new Date();
// 		const newNote = {
// 			id: nanoid(),
// 			text: text,
// 			date: date.toLocaleDateString(),
// 		};
// 		const newNotes = [...notes, newNote];
// 		setNotes(newNotes);
// 	};

// 	const deleteNote = (id) => {
// 		const newNotes = notes.filter((note) => note.id !== id);
// 		setNotes(newNotes);
// 	};

// 	return (
// 		<div className={style.bodyNotes}>
// 			<div className={style.container}>
//                 <h1>Notes From User</h1>
			
// 				<NotesList
// 					notes={notes.filter((note) =>
// 						note.text.toLowerCase().includes(searchText)
// 					)}
// 					handleAddNote={addNote}
// 					handleDeleteNote={deleteNote}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default NotesApp;