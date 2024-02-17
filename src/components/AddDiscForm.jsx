import { useState } from 'react';

export const AddDiscForm = ({addDisc}) => {
    const [value, setValue] = useState("");
    const [speed, setSpeed] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDisc(value, speed)
        document.querySelector('.add-disc-input').value = ''
        document.querySelector('#speed').value = ''
    }

    const handleChange = (e) => {
        setValue(() => e.target.value);
    }

    const handleSpeedChange = (e) => {
        setSpeed(() => e.target.value);
    }

    return (
      <form className="disc-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter disc name.." className="add-disc-input" onChange={handleChange}></input>
        <div className='disc-details'>
            <label>Speed:</label><input id='speed' className="disc-detail-input" type="number" onChange={handleSpeedChange}></input>
            <label>Glide:</label><input className="disc-detail-input" type="number"></input>
            <label>Turn:</label><input className="disc-detail-input" type="number"></input>
            <label>Fade:</label><input className="disc-detail-input" type="number"></input>
        </div>
        <button type="submit" className="add-btn">Add Disc</button>
      </form>
    )
  }
  