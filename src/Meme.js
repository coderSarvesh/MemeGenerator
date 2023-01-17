import React, { useState,useEffect } from 'react'

const Meme = () => {

    const [formData, setformData] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )


    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {

        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
            getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setformData(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    const handleChange = (event) => {
        setformData(data => {
            return {
                ...data,
                [event.target.name]: event.target.value
            }
        })
    }


    return (
        <div>
            <main className='main'>
                <form className='form'>
                    <input
                        name='topText'
                        value={formData.topText}
                        className='formtext'
                        type='text'
                        onChange={handleChange}
                        placeholder='Top Text'
                    />

                    <input
                        name='bottomText'
                        value={formData.bottomText}
                        className='formtext'
                        type='text'
                        onChange={handleChange}
                        placeholder='Bottom Text'
                    />
                </form>

                <div className='center'>
                    <button className='button' onClick={getMemeImage}>Get MEME</button>
                </div>

                <div className='center margin'>
                <img className='relative' src={`${formData.randomImage}`} alt="Meme img" />
                    <h1 className='top'>{formData.topText}</h1>
                    <h1 className='bot'>{formData.bottomText}</h1>
                </div>

            </main>
        </div>
    )
}

export default Meme