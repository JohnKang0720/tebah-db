import React from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from '../useFetch'
import DeleteMember from './Util/DeleteMember';
import View from './View';
import EditMember from './Util/EditMember';

function Second() {
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState([]);

  const [data, error, loading] = useFetch("secondary");

  useEffect(() => {
    if (data) {
      let filteredArray = data.filter(info => info.name.includes(text) || info.category.includes(text));
      setFiltered(filteredArray)
    }
  }, [text])

  return (
    <div><h1> 중고등부 데이터 </h1>
      <div class="input-div">
        <div class="inputs">
          <strong> 맴버 검색: </strong>
          <br />
          <input placeholder='검색' onChange={e => setText(e.target.value)} />
          <br />
          <DeleteMember />
        </div>
        <EditMember />
      </div>
      <View data={[loading, text, data, filtered]} />
    </div>
  )
}

export default Second