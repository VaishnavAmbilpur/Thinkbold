import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router'; // <-- use react-router-dom
import axios from 'axios';
import api from '../lib/axios';
const CreatePage = () => {
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [loading, setloding] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            toast.error("All fields required");
            return;
        }
        setloding(true);
        try {
            await api.post("/notes", {
                title,
                content
            });
            toast.success("Note is Created");
            navigate("/");
        } catch (err) {
            toast.error("Not able to Create the Note");
        } finally {
            setloding(false);
        }
    };

    return (
        <div className='min-h-screen bg-zinc-950'>
            <div className='mx-auto py-8 px-4'>
                <div className="max-w-4xl mx-auto">
                    <Link to={"/"} className='gap-1 btn btn-accent text-zinc-950'>
                        <ArrowLeftIcon />
                        <span className='font-extrabold'>Back to Home</span>
                    </Link>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='card-title text-4xl mb-4 tracking-tighter'>Create New Note</h2>
                            <form onSubmit={handleSubmit} className='flex flex-col'>
                                <label className='label m-3'>
                                    <div className='label-text'>TITLE</div>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Title'
                                    className='input input-bordered'
                                    value={title}
                                    onChange={e => settitle(e.target.value)}
                                />
                                <label className='label m-3'>
                                    <div className='label-text'>NOTE</div>
                                </label>
                                <textarea
                                    placeholder='Write a Note...'
                                    className='input input-bordered w-120 h-60 p-3'
                                    value={content}
                                    onChange={e => setcontent(e.target.value)}
                                />
                                <div className='card-actions justify-end mt-4'>
                                    <button
                                        type='submit'
                                        className='btn btn-accent text-1xl text-zinc-950 font-extrabold'
                                        disabled={loading}
                                    >
                                        {loading ? "Creating" : "Create Note"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;