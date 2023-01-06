import React from 'react'

const Meme = () => {
    return (
        <div>
            <main>
                <form className='form'>
                    <input
                        className='formtext'
                        type='text'
                        placeholder='Top Text'
                    />

                    <input
                        className='formtext'
                        type='text'
                        placeholder='Bottom Text'
                    />
                </form>
                <div className='center'>
                    <button className='button'>Get MEME</button>
                </div>
            </main>
        </div>
    )
}

export default Meme