import { useState } from 'react';

const TextAreaCounter = () => {
    const [numOfEnteredChars, setNumOfEnteredChars] = useState(0);

    const updateCharacterCount = (event) => {
        const inputText = event.target.value;
        setNumOfEnteredChars(inputText.length);
    };

    const updateColor = () => {
        return numOfEnteredChars > 55 ? 'red' : 'blue';
    };

    return (
        <div style={{ border: '2px solid rgb(0, 183, 255)', width: '500px', height: '300px', backgroundColor: 'skyblue' }}>
            <textarea
                id="textbox"
                name="message"
                rows="10"
                cols="40"
                onInput={updateCharacterCount}
                placeholder="Enter Text Here"
                style={{ color: 'rgb(49, 44, 44)', margin: '20px' }}
            ></textarea>
            <div
                id="charCount"
                style={{ textAlign: 'right', color: updateColor(), fontWeight: 'bold' }}
            >
                {`${numOfEnteredChars} Character`}
            </div>
        </div>
    );
};

export default TextAreaCounter;