import React, { useState } from 'react'

export default function List() {

  const [input, setInput ] = useState('');
  const [list, setList] = useState(['Learn React', 'Study Phiton'])


  const handleConfirmInput = () => {
    setList([...list, input])
    setInput('')
  }

  const handleDelate = (i) => {
    const updatedList = [...list];
    updatedList.splice(i, 1);
    setList(updatedList);
  }

  return (
    
      <div id="list" className="d-flex min-vh-100 justify-content-center align-items-center bg-black">

        <div className="text-center" style={{width: '100%', maxWidth: '600px'}}>
          <h1 className="mb-4 text-white fw-lighter">TO DO LIST</h1>

          <div className="bg-dark p-4 text-white rounded">

            <div className="d-flex justify-content-between align-items-center bg-white fs-3 fw-lighter">
              <input className="w-100 text-center border-0 p3" placeholder='Add new task' style={{minHeight: '50px'}} type="text" value={input} onChange={(e)=>{ setInput(e.target.value)}}/>
              <span className=" d-inline-block bg-white text-black px-3 " onClick={handleConfirmInput}>V</span>
            </div>

            <div>             
              <ul className=" list-unstyled fw-lighter fs-3 ">

                {list.map((el, i)=>{
                  return(
                    <li key={i} className="border p-3 d-flex justify-content-between">
                      <span>{el}</span><span onClick={() => handleDelate(i)} >X</span>
                    </li>
                  )
                })}

                <p className="fs-6 text-start py-3">Task left: {list.length}</p>

              </ul>
            </div>
          </div>
        
        </div>

      </div>
    
  )
}
