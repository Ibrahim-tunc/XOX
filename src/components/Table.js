import { useEffect, useState } from "react"


const Table = () => {
   // f: first s: second t: third first parameter row second parameter column


   const [sqr, setSqr] = useState({ff:"", fs:"", ft:"", sf:"", ss:"", st:"", tf:"", ts:"", tt:""})
   const [turnx, setTurnx] = useState(false)

   const check = () => {
      const { ff, fs, ft, sf, ss, st, tf, ts, tt } = sqr

      const arr = [ff + fs + ft, sf + ss + st, tf + ts + tt, ff + sf + tf, fs
                   + ss + ts, ft + st + tt, ff + ss + tt, tf + ss + ft]

      const confirm = (a) => {
         alert(a + "Kazandı")
         setSqr({ff:"", fs:"", ft:"", sf:"", ss:"", st:"", tf:"", ts:"", tt:""})
      }

      arr.map(a => a === "XXX" ? confirm("X") :
                   a === "OOO" ? confirm("Y") :
                   a)
      
   }
   const checkNoWinner = () => {
      let flag = true
      Object.keys(sqr).forEach(function(key) {
         if(sqr[key] === "") {
            flag = false
         }
       });
      if (flag ){
         setSqr({ff:"", fs:"", ft:"", sf:"", ss:"", st:"", tf:"", ts:"", tt:""})
         alert("No one winner")
         flag = false
      }          
   }

   useEffect(() => {
      setTurnx(turnx ? false : true)
      check()
      checkNoWinner()
   }, [sqr])


   return (
      <>
         <button className={turnx ? "active" : "passive"}>X</button>
         <button className={!turnx ? "active" : "passive"}>O</button>
         <table>
            <tbody>
               <tr>
                  <td onClick={() => { setSqr({ ...sqr, ff: turnx ? "X" : "O" }) }}>{sqr.ff}</td>
                  <td onClick={() => { setSqr({ ...sqr, fs: turnx ? "X" : "O" }) }}>{sqr.fs}</td>
                  <td onClick={() => { setSqr({ ...sqr, ft: turnx ? "X" : "O" }) }}>{sqr.ft}</td>
               </tr>
               <tr>
                  <td onClick={() => { setSqr({ ...sqr, sf: turnx ? "X" : "O" }) }}>{sqr.sf}</td>
                  <td onClick={() => { setSqr({ ...sqr, ss: turnx ? "X" : "O" }) }}>{sqr.ss}</td>
                  <td onClick={() => { setSqr({ ...sqr, st: turnx ? "X" : "O" }) }}>{sqr.st}</td>
               </tr>
               <tr>
                  <td onClick={() => { setSqr({ ...sqr, tf: turnx ? "X" : "O" }) }}>{sqr.tf}</td>
                  <td onClick={() => { setSqr({ ...sqr, ts: turnx ? "X" : "O" }) }}>{sqr.ts}</td>
                  <td onClick={() => { setSqr({ ...sqr, tt: turnx ? "X" : "O" }) }}>{sqr.tt}</td>
               </tr>
            </tbody>
         </table>
      </>
   )
}

export default Table