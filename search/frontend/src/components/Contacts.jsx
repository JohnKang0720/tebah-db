import React from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from '../useFetch'
import axios from 'axios'
import View from './View';
import { getAuth } from 'firebase/auth';

function Contacts({ route }) {
    const [text, setText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [code, setCode] = useState(1);
    const [arr, setArr] = useState([]);

    const [data, error, loading] = useFetch(`contacts/${route}`);

    const filter = () => {
        axios.post(`http://localhost:5000/contacts/${route}`, {
            code: code
        }).then(res => {
            console.log(res)
            if (res.data.length === 0) {
                alert("No such family code.")
            }
            setArr(res.data)
        }).catch(err => console.log(err))
    }

    return (
        <div><h1> 기본주소록 </h1>
            {/* <strong> Search member: </strong>
            <br /> */}
            {/* <input placeholder='검색' onChange={e => setText(e.target.value)} />
            <br />
            <br /> */}
            <br />
            <div class="input-div" style={{ flexDirection: "column" }}>
                <h5> 가족검색창 </h5>
                <div class="inputs" style={{ flexDirection: "column" }}>
                    <br />
                    <input class="form-control" placeholder='가족코드 입력' onChange={e => setCode(e.target.value)} />
                    <button class="btn btn-primary" onClick={filter}> 검색 </button>
                    <br />
                </div>
            </div>
            <br />
            <br />
            <View data={[loading, text, data, arr]} />
        </div>
    )
}

export default Contacts