import React, { useState } from 'react'

export default function TxtLand(props) {
    const [Text, setText] = useState('');
    const handleChange = (e) => {
        e.target.value();
    }
    const handleDummy = () => {
        setText('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis suscipit cupiditate asperiores esse totam cumque ipsa repellat, rerum, magnam necessitatibus deleniti quia fugiat laudantium odit accusamus iusto eaque sit, officiis similique. Inventore corporis illo amet architecto laudantium. Accusantium dolores est iure eaque ut facilis alias velit earum, at perspiciatis voluptatem recusandae omnis, iste delectus culpa veniam sapiente veritatis. Aliquid neque saepe consectetur atque vitae cupiditate. Dolores magni enim, autem blanditiis eaque veritatis saepe commodi? Tempora qui doloremque rem id velit sunt delectus corrupti, repellendus quos dolore enim officiis, assumenda, sit at minima ipsa doloribus perferendis! Dicta eveniet similique reiciendis?');
    }

    const handleTruncate = () => {
        let userInput = prompt("Truncate Value", 50);
        if (userInput == null || userInput == "") {
            alert("You cancelled the prompt");
        } else {
            setText(Text.substring(0, userInput));
        }
    }
    return (
        <>
            <div className='container mt-4'>
                <h1 style={{ fontSize: '60px' }} className='text-center'>{props.title.toUpperCase()}</h1>
                <p className='text-center' style={{ fontWeight: 'normal', fontSize: '20px' }}>text to uppercase | lowercase | remove space | word count | reverse | swap | copy | & many more</p>

            </div>

            <div className="container my-4">
                <textarea className='form-control' name="textBox" value={Text} id="txtBox" cols="30" rows="10" onChange={handleChange} placeholder='Enter Something'></textarea>
                <div className='my-3'>
                    <button className='btn btn-warning mx-1' onClick={handleDummy}>Dummy</button>
                    <button className='btn btn-secondary mx-1' onClick={handleTruncate}>Truncate</button>
                </div>
            </div>
        </>

    )
}
