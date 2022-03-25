//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import dummy from "../db/data.json"  // 더미 데이터 불러오기

export default function DayList(){

    //const [days, setDays] = useState([]); 
    // const [count, setCount] = useState();

    const days = useFetch("http://localhost:3001/days");

    // useEffect(() => {
    //    fetch("http://localhost:3001/days")
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []);

    return (
        <ul className = "list_day">
            {days.map(day => (
                <li key = {day.id}>
                    <Link to = {`/day/${day.day}`} >Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}

// key 사용하면 warning이 사라짐!
// 리액트에서 key는 왜 필요할까? 등등.. #9 4:25 보기!

// 여기서 day.day는 data.json의 days의 day를 의미!


// useEffect 


// export default function DayList(){
//     const [days, setDays] = useState([]); 
//     const [count, setCount] = useState(0); // 초깃값 0

//     function onClick() {
//         setCount(count+1);
//     }
    
//     function onClick2() {
//         setDays([
//             ...days, //현재, 기존 배열
//             {
//                 id : Math.random(),
//                 day : 1,
//             },
//         ]);
//     }

//     useEffect(() => {
//         console.log("Count change");
//     }, [count]);

//     return (
//         <>
//             <ul className = "list_day">
//                 {days.map(day => (
//                     <li key = {day.id}>
//                         <Link to = {`/day/${day.day}`}>Day {day.day}</Link>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick = {onClick}>{count}</button>
//             <button onClick = {onClick2}>Day change</button>
//         </>
//      );

// }
