import React, { useState, useEffect } from 'react';
import "./bookmark.css"

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(savedBookmarks);
    }, []);

    const removeBookmark = (id) => {
        const updatedBookmarks = bookmarks.filter(job => job.id !== id);
        setBookmarks(updatedBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    };

    return (
        <div className="bookmarks-container">
            <img src="https://i.ibb.co/3yQWQ2q/Aaa1.jpg" alt="apphani" className='apphani'/>
        </div>
    );
};

export default Bookmarks;
