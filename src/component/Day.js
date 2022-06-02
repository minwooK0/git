import dummy from '../db/data.json';



export default function Day() {
    const day = 1;
    const listDay = dummy.words.filter(word => word.day === day);

    return(
 <>
    <table>
       <tbody>
           {listDay.map(word => (
               <tr key={word.id}>
                   <td>{word.eng}</td>
                   <td>{word.kor}</td>
               </tr>
           ))}
       </tbody>
    </table>
 </>
    )

}