import React, { useState } from 'react'

const Meme = () => {

    const [formData, setformData] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    console.log(formData)

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
                    <button className='button'>Get MEME</button>
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