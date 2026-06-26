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
        <>
            <div>
                <button onClick={() => setenablemultipleselection(!enablemultipleselection)}>Enable Multi Selection</button>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div>
                            <div onClick={enablemultipleselection ? () => multipleselection(item.id) : () => singleSelectionHandler(item.id)}>
                                <div>
                                    <h3>{item.question}</h3>
                                </div>

                            </div>
                            {
                                enablemultipleselection ?
                                    multiple.indexOf(item.id) !== -1 && (
                                        <div>{item.answer}</div>)
                                    :
                                    selected === item.id && (
                                        <div>{item.answer}</div>)
                            }
                        </div>
                    ))
                ) : (
                    <div>No Data Found</div>
                )}
            </div>
        </>
    );
} 