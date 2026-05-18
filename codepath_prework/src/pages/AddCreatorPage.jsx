import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
import './AddCreatorPage.css'

const AddCreatorPage = ()=>{

    const[name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const {error} = await supabase
        .from('Creators')
        .insert([{ name, url, description, imageURL }])

        if (error) console.error(error)
        else {
            alert('creator added successfully')
            navigate('/')
        }


    }
   return (
    <div className="add-page">

        <div className="add-card">

            <h1>Add Creator</h1>

            <form
                className="add-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Creator's name"
                        onChange={(e)=>
                            setName(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="url">
                        Url
                    </label>

                    <input
                        type="text"
                        id="url"
                        value={url}
                        placeholder="Creator's youtube link"
                        onChange={(e)=>
                            setUrl(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="description">
                        Description
                    </label>

                    <textarea
                        id="description"
                        value={description}
                        placeholder="Creator description"
                        onChange={(e)=>
                            setDescription(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="imageUrl">
                        Image Url
                    </label>

                    <input
                        type="text"
                        id="imageUrl"
                        value={imageURL}
                        placeholder="Creator image link"
                        onChange={(e)=>
                            setImageURL(
                                e.target.value
                            )
                        }
                    />

                </div>

                <button
                    className="add-btn"
                    type="submit"
                >
                    Add Creator
                </button>

            </form>

        </div>

    </div>
)
}

export default AddCreatorPage;