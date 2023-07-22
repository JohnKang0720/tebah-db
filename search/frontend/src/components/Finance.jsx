import React from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from '../useFetch'
import axios from 'axios'
import DeleteMember from './Util/DeleteMember';
import View from './View';
import EditMember from './Util/EditMember';
function Finance() {
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [id, setId] = useState(0);
  const [num, setNum] = useState(0);

  const [data, error, loading] = useFetch("main/finance");

  useEffect(() => {
    if (data) {
      let filteredArray = data.filter(info => info.eng_name.toLowerCase().includes(text.toLowerCase()) || info.category.toLowerCase() === text.toLowerCase());
      setFiltered(filteredArray)
    }
  }, [text])

  const assignNum = () => {
    axios.put(`http://localhost:5000/main/finance/${id}/${num}`, {
    })
      .then(res => {
        console.log(res)
      }).catch(err => console.log(err))
  }

  return (
    <div><h1> 재정부 데이터 </h1>
      <br />
      <div class="input-div">
        <div className='inputs'>
          <h5> 맴버 검색: </h5>
          <br />
          <input placeholder='검색' onChange={e => setText(e.target.value)} />
        </div>
        <div className='inputs'>
          <h5> Assign offering #: </h5>
          <br />
          <input placeholder="Enter id" onChange={e => setId(e.target.value)} />
          <br />
          <input placeholder="Offering #" onChange={e => setNum(e.target.value)} />
          <br />
          <button onClick={assignNum}> Submit </button>
        </div>
      </div>
      <br />
      <br />
      <View data={[loading, text, data, filtered]} />
    </div>
  )
}

export default Finance