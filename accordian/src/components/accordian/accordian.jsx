import data from '../../../data/data.js'
import { useState } from 'react'

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enablemultipleselection, setenablemultipleselection] = useState(false)
    const [multiple, setmultiple] = useState([])


    function singleSelectionHandler(id) {
        setSelected(selected === id ? null : id);
    }

    function multipleselection(id) {
        let temp = [...multiple]

        let index = temp.indexOf(id)

        if (index === -1) {
            temp.push(id)
        } else {
            temp.splice(index, 1)
        }

        setmultiple(temp)

    }
    return (
        <div className='accordion-shell'>
            <h1 className='accordion-heading'>Accordion Demo</h1>

            <button
                className='toggle-button'
                onClick={() => setenablemultipleselection(!enablemultipleselection)}
            >
                {enablemultipleselection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
            </button>

            <div className='accordion-wrap'>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div className='accordion-item' key={item.id}>
                            <div
                                className='accordion-title'
                                onClick={enablemultipleselection ? () => multipleselection(item.id) : () => singleSelectionHandler(item.id)}
                            >
                                <div>
                                    <h3>{item.question}</h3>
                                </div>
                                <span className='accordion-icon'>+</span>
                            </div>
                            {
                                enablemultipleselection ?
                                    multiple.indexOf(item.id) !== -1 && (
                                        <div className='accordion-content'>{item.answer}</div>)
                                    :
                                    selected === item.id && (
                                        <div className='accordion-content'>{item.answer}</div>)
                            }
                        </div>
                    ))
                ) : (
                    <div className='no-data'>No Data Found</div>
                )}
            </div>
        </div>
    );
} 