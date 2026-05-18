import React, { useState, useEffect } from 'react';
import { supabase } from "../client.js"
import { useParams } from 'react-router-dom';

import CreatorProfile from '../components/CreatorProfile.jsx';
import './ViewCreatorPage.css'

const ViewCreatorPage = () => {

    const { id } = useParams()

    const [creator, setCreator] = useState(null)

    useEffect(() => {

        const fetchCreator = async () => {

            const { data, error } = await supabase
                .from("Creators")
                .select()
                .eq('id', id)
                .single()

            if (error) {
                console.error(error)
            }
            else {
                setCreator(data)
            }

        }

        fetchCreator()

    }, [id])

    if (!creator)
        return (
            <div className='view-loading'>
                Loading...
            </div>
        )

    return (
<div className="view-page">

    <div className="view-card">

        <img
            className="view-image"
            src={creator.imageURL}
            alt={creator.name}
        />

        <h1>{creator.name}</h1>

        <p>{creator.description}</p>

        <a
            href={creator.url}
            target="_blank"
        >
            Visit Channel
        </a>

    </div>

</div>
)

}

export default ViewCreatorPage;