import React, { useState, useEffect } from 'react';
import { supabase } from "../client.js"
import { Link } from 'react-router-dom';

import CreatorProfile from '../components/CreatorProfile.jsx';
import './ShowCreatorsPage.css'

const ShowCreatorsPage = () => {

    const [creators, setCreators] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState("")

    const fetchCreators = async () => {

        try {

            setLoading(true)

            const { data, error } = await supabase
                .from('Creators')
                .select()

            if (error) throw error

            setCreators(data || [])

        }
        catch (error) {

            console.error(error)

            setErrorMsg(
                "Failed to load creators"
            )
        }
        finally {

            setLoading(false)

        }
    }

    useEffect(() => {
        fetchCreators()
    }, [])

    if (loading) {
        return (
            <div className='loading'>
                Loading creators...
            </div>
        )
    }

    if (errorMsg) {
        return (
            <div className='error'>
                {errorMsg}
            </div>
        )
    }

    return (

        <div className='display-page-container'>

            {creators.length === 0 ? (

                <p>
                    No Creators yet! Add some.
                </p>

            ) : (

                <div className='display-body'>

                    {creators.map(creator => (

                        <div
                            className='creator-link'
                        >

                            <CreatorProfile
                                id={creator.id}
                                name={creator.name}
                                url={creator.url}
                                description={creator.description}
                                imageURL={creator.imageURL}
                            />

                        </div>

                    ))}

                </div>

            )}

        </div>

    )
}

export default ShowCreatorsPage;