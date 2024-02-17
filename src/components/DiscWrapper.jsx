import { useState } from 'react'
import { AddDiscForm } from './AddDiscForm';
import { v4 as uuidv4 } from 'uuid'
import { Disc } from './Disc'
uuidv4();

export const DiscWrapper = () => {
    const [discs, setDiscs] = useState([]);

    const addDisc = (disc, speed) => {
        setDiscs([...discs, {id: uuidv4(), disc: disc, speed: speed}])
        console.log(discs);
    }

    return (
      <div className='disc-wrapper'>
        <AddDiscForm addDisc={addDisc} />
        {discs.map((disc, index, speed) => (
            <Disc disc={disc} key={index} speed={speed} />
        ))}

      </div>
    )
  }