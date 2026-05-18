import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreatorPage.css'

const EditCreatorPage = ()=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const[name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=>{
        const fetchCreator = async ()=>{
            const {data, error} = await supabase
            .from('Creators')
            .select()
            .eq('id',id)
            .single()

            if(error){
                console.error(error)
                setError(error.message)
            }else{
                    setName(data.name)
                    setUrl(data.url)
                    setDescription(data.description)
                    setImageURL(data.imageURL)
                    setLoading(false)
            }

            
        }

        fetchCreator()

    }, [id])

    const handleUpdate = async(e) =>{
        e.preventDefault()

        if(!window.confirm('Are you sure you want to update this creator?')) return
    
        const {error} = await supabase
        .from('Creators')
        .update({ name, url, description, imageURL })
        .eq('id', id)

        if (error) console.error(error)
        else navigate('/')
    
    }


    const handleDelete = async()=>{
        if(!window.confirm('Are you sure you want to delete this creator?')) return

        const {error} = await supabase
        .from('Creators')
        .delete()
        .eq('id',id)

        if (error) console.error(error)
        else navigate('/')
    
    }

    
    if (loading) return <div>Loading...</div>
    if (error) return <div style={{ color: 'red' }}>{error}</div>

 return (
    <div className="edit-page">

        <div className="edit-card">

            <h1>Edit Creator</h1>

            <form
                className="edit-form"
                onSubmit={handleUpdate}
            >

                <div className="form-group">

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        value={name}
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
                        onChange={(e)=>
                            setImageURL(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="button-row">

                    <button
                        className="update-btn"
                        type="submit"
                    >
                        Update Creator
                    </button>

                    <button
                        className="delete-btn"
                        type="button"
                        onClick={handleDelete}
                    >
                        Delete Creator
                    </button>

                </div>

            </form>

        </div>

    </div>
)
}

export default EditCreatorPage;