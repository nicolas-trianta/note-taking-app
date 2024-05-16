import React, { useState } from 'react';
import './App.css';

function App() {
	// States for list of notes, title input, content input, and selected note

	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [selectedNote, setSelectedNote] = useState(null);

	const handleAddNote = () => {
		if (title.trim() !== '' && content.trim() !== '') {
			setNotes([...notes, { title, content }]); // Adds the new note to the list
			setTitle(''); // Clears input fields
			setContent(''); // Clears input fields
		}
	};

	const handleRemoveNote = index => {
		const updateNotes = notes.filter((note, noteIndex) => noteIndex !== index);
		setNotes(updateNotes);
		setSelectedNote(null);
	};

	const handleSelectNote = index => {
		setSelectedNote(notes[index]);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Notes</h1>
				<div className='note-inputs'>
					<input
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Title'
					/>
					<textarea
						value={content}
						onChange={e => setContent(e.target.value)}
						placeholder='Content'
					/>
					<button onClick={handleAddNote}>Add Note</button>
				</div>

				<div className='notes-container'>
					<div className='notes-list'>
						<ul>
							{notes.map((note, index) => (
								<li key={index}>
									<span
										onClick={() => {
											handleSelectNote(index);
										}}>
										{note.title}
									</span>
									<button
										onClick={() => {
											handleRemoveNote(index);
										}}>
										Remove
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className='notes-content'>
						{selectedNote ? (
							<div>
								<h2>{selectedNote.title}</h2>
								<p>{selectedNote.content}</p>
							</div>
						) : (
							<p>Selectd a note to view its details.</p>
						)}
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
