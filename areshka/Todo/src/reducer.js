import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dobav, izmen, udalil } from './contactsSlice';

export const handleSave = (name, editId, dispatch, setEditId, setName) => {
    if (!name.trim()) return;
    if (editId) {
        dispatch(izmen({ id: editId, name }));
        setEditId(null);
    } else {
        dispatch(dobav({ id: Date.now(), name }));
    }
    setName('');
};

export const handleEdit = (contact, setEditId, setName) => {
    setEditId(contact.id);
    setName(contact.name);
};

export const handleCancelEdit = (setEditId, setName) => {
    setEditId(null);
    setName('');
};

export const toggleImportant = (contactId, importantId, setImportantId) => {
    setImportantId(contactId === importantId ? null : contactId);
};

const Reducer = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null);
    const [importantId, setImportantId] = useState(null);

    return (
        <div className="App">
            <div className="form">
                <h1 className='title'>Toktogulov Umar - todo_list</h1>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button
                    onClick={() => handleSave(name, editId, dispatch, setEditId, setName)}
                    className="glow-on-hover"
                    type="button"
                >
                    {editId ? 'Изменить' : 'Добавить'}
                </button>

                {editId && (
                    <button
                        onClick={() => handleCancelEdit(setEditId, setName)}
                        className="glow-on-hover"
                        type="button">Отменить</button>
                )}
            </div>

            <ul className="contact-list">
                {contacts.map((contact) => (
                    <li
                        key={contact.id}
                        style={{
                            backgroundColor:
                                contact.id === importantId ? 'red' : 'transparent'
                        }}
                    >
                        <span
                            style={{
                                color: contact.id === importantId ? 'black' : 'black'
                            }}
                        >
                            {contact.name}
                        </span>
                        <button
                            onClick={() => handleEdit(contact, setEditId, setName)}
                            className="glow-on-hover"
                            type="button">ИЗМЕНИТЬ</button>
                        <button
                            onClick={() => dispatch(udalil(contact.id))}
                            className="glow-on-hover"
                            type="button">УДАЛИТЬ
                        </button>
                        <button
                            onClick={() => toggleImportant(contact.id, importantId, setImportantId)}
                            className="glow-on-hover"
                            type="button">ВАЖНАЯ
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reducer;