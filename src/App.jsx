import { useEffect, useState } from "react";
const TOTAL=30;
export default function App(){
 const [pieces,setPieces]=useState([]);
 useEffect(()=>{
  const saved=JSON.parse(localStorage.getItem('pieces')||'[]');
  setPieces(saved);
 },[]);
 const claim=(id)=>{
   const next=[...new Set([...pieces,id])];
   setPieces(next);
   localStorage.setItem('pieces',JSON.stringify(next));
 };
 return <div style={{padding:20,fontFamily:'sans-serif'}}>
 <h1>보물찾기 퍼즐</h1>
 <p>{pieces.length}/{TOTAL} 수집</p>
 <div style={{display:'grid',gridTemplateColumns:'repeat(6,100px)',gap:'4px'}}>
 {[...Array(TOTAL)].map((_,i)=><div key={i} style={{width:100,height:100,border:'1px solid #ccc',display:'flex',alignItems:'center',justifyContent:'center'}}>{pieces.includes(i+1)?'🧩'+(i+1):'❓'}</div>)}
 </div>
 <hr/>
 <p>테스트용</p>
 <button onClick={()=>claim(1)}>1번 획득</button>
 </div>
}
