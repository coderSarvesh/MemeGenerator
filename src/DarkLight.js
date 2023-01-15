import React from 'react'

const DarkLight = (props) => {

    const styles = {
        backgroundColor: props.on ? "#222222" : "black"
    }

    const changeTheme = () => {
            props.c

    }

    return (
        <div className='hero' style={styles}>
            <button onClick={changeTheme}>Change Theme</button>
            <h1>What is this site?</h1>
            <p>
                We are rewriting the React documentation with a few differences:

                All explanations are written using Hooks rather than classes.
                We’ve added interactive examples and visual diagrams.
                Guides include challenges (with solutions!) to check your understanding.
                This beta website contains the current draft of the new docs.

                How much content is ready?
                Learn React: ~99% finished.
                API Reference: 100% finished.
                You can track our progress on GitHub.

                How can I provide feedback?
                Please use this GitHub issue or this anonymous form for high-level feedback. If you spot something that doesn’t make sense, please tell us! Additionally, each page has thumbs up/down buttons in the corner.

                Will this site replace the main site?
                We aim to switch this site to be the main one once we reach content parity with</p>
        </div>
    )
}

export default DarkLight