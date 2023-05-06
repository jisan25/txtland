import React, { useState } from 'react'

export default function TxtLand(props) {
    const [Text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleDummy = () => {
        setText('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis suscipit cupiditate asperiores esse totam cumque ipsa repellat, rerum, magnam necessitatibus deleniti quia fugiat laudantium odit accusamus iusto eaque sit, officiis similique. Inventore corporis illo amet architecto laudantium. Accusantium dolores est iure eaque ut facilis alias velit earum, at perspiciatis voluptatem recusandae omnis, iste delectus culpa veniam sapiente veritatis. Aliquid neque saepe consectetur atque vitae cupiditate. Dolores magni enim, autem blanditiis eaque veritatis saepe commodi? Tempora qui doloremque rem id velit sunt delectus corrupti, repellendus quos dolore enim officiis, assumenda, sit at minima ipsa doloribus perferendis! Dicta eveniet similique reiciendis?');
    }

    const handleTruncate = () => {
        let userInput = prompt("Truncate Value", 50);
        if (userInput === null || userInput === "") {
            alert("You cancelled the prompt");
        } else {
            setText(Text.substring(0, userInput));
        }
    }

    const handleClear = () => {
        setText('');
    }
    const handleUpperCase = () => {
        setText(Text.toUpperCase());

    }
    const handleLowerCase = () => {
        setText(Text.toLowerCase());

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(Text);
        alert('text-copied');
    }
    const handleItalic = () => {
        document.getElementById('preview').innerHTML = Text.italics();
    }
    const handleReverse = () => {
        let revText = Text.split('').reverse().join('');
        setText(revText);
    }
    const handleSlug = () => {
        let slug = Text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setText(slug);
    }
    const handleSwap = () => {
        const swap = Text.replace(/(\w+)\s(\w+)/, "$2 $1");
        setText(swap);
    }
    const handleSort = () => {
        let sortText = Text.toLowerCase().split(/\s+/).sort().join(" ");
        setText(sortText);
    }
    const handleRmvSpace = () => {
        let spaceRemovedText = Text.split(/[ ]+/);
        setText(spaceRemovedText.join(" "));
    }
    return (
        <>
            <div className='container mt-4'>
                <h1 style={{ fontSize: '60px' }} className='text-center'>{props.title.toUpperCase()}</h1>
                <p className='text-center' style={{ fontWeight: 'normal', fontSize: '20px' }}>text to uppercase | lowercase | remove space | word count | reverse | swap | copy | & many more</p>

            </div>

            <div className="container my-4">
                <textarea className='form-control' name="textBox" value={Text} id="txtBox" cols="30" rows="7" onChange={handleChange} placeholder='Enter Something'></textarea>
                <div className='my-3'>
                    <button className='btn btn-warning mx-1' onClick={handleDummy}>Dummy</button>
                    <button disabled={Text.length === 0} className='btn btn-secondary mx-1' onClick={handleTruncate}>Truncate</button>
                    <button disabled={Text.length === 0} className='btn btn-danger mx-1' onClick={handleClear}>Clear</button>
                    <button disabled={Text.length === 0} className='btn btn-primary mx-1' onClick={handleUpperCase}>UPPERCASE</button>
                    <button disabled={Text.length === 0} className='btn btn-info mx-1' onClick={handleLowerCase}>lowercase</button>
                    <button disabled={Text.length === 0} className='btn btn-success mx-1' onClick={handleCopy}>Copy</button>
                    <button disabled={Text.length === 0} style={{ backgroundColor: '#D54B01', border: 'none' }} className='btn btn-success mx-1' onClick={handleItalic}>Italic</button>
                    <button disabled={Text.length === 0} className='btn btn-danger mx-1' onClick={handleReverse}>Reverse</button>
                    <button disabled={Text.length === 0} className='btn btn-secondary mx-1' onClick={handleSlug}>URL slug</button>
                    <button disabled={Text.length === 0} className='btn btn-success mx-1' onClick={handleSwap}>Swap</button>
                    <button disabled={Text.length === 0} className='btn btn-primary mx-1' onClick={handleSort}>SORT a-z</button>
                    <button disabled={Text.length === 0} className='btn btn-warning mx-1' onClick={handleRmvSpace}>RMV Space</button>
                </div>
            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <p>{Text.length} Characters,
                    {Text.split(/\s+/).filter((el) => { return el.length !== 0 }).length} Words,
                    {Text.split("\n").filter(el => el.length !== 0).length} lines,
                    <b>{Text.match(/[aeiou]/gi) ? Text.match(/[aeiou]/gi).length : '0'}</b> Vowels</p>
                <p><b>{0.008 * Text.split(/\s+/).filter(el => el.length !== 0).length}</b>  - Minutes Read</p>
                <hr />
                <h2>Preview</h2>
                <p id='preview'>
                    {Text.split(/\s+/).filter(el => el.length !== 0).length > 0 ? Text : 'Nothing to preview'}
                </p>
            </div>
        </>

    )
}
