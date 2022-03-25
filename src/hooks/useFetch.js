// 나만의 커스텀 훅

import { useEffect, useState } from "react";

export default function useFetch(url) {    // url : API 주소
    const [data, setData] = useState([]);  // data : 상태값

    useEffect(() => {
        fetch(url)                         // fetch
            .then(res => {
                return res.json();
            })
            .then(data => { 
                setData(data);                  // 응답받은 데이터를 setData.
            });
    }, [url]);

    return data;
}