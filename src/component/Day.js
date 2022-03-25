// 특정 날짜를 클릭해 들어갔을 때 단어들이 나오는 페이지.

//import dummy from "../db/data.json";
//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    //dummy.words
    //영어와 뜻 표현

    const { day } = useParams();
    // const wordList = dummy.words.filter(word => word.day === Number(day));
    // useParams로 들어오는 값 : 문자
    // 문자랑 숫자를 비교하니까, filter에 아무것도 안 걸러지는 것.
    // 따라서 저 마지막 day도 숫자여야 비교 가능하므로 Number를 씌워주자

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    //const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`) //http임. https 주의!
    //         .then(res=>{
    //             return res.json(); // 여기서 response : http응답. 
    //             // 실제 json은 아니므로, json() 메서드를 사용해 json으로 변환
    //         })
    //         .then(data=> {
    //             setWords(data);
    //         });
    // }, [day]);
 
    return (
        <>
        <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} /> 
                        //word를 컴포넌트로 가져오기
                        //스타일은 컴포넌트 단위이므로.
                        //고유한 값 id 사용.
                    ))}
                </tbody>
            </table>
        </>
    ); 
}