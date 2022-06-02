import dummy from '../db/data.json';
import {Link } from 'react-router-dom';

export default function DayList() {
    console.log(dummy);
    return (
        <div>
            <ul className='list_day'>
                {dummy.days.map(day => (
                    <li key={day.id}>Day {day.day}
                        <Link to="day"/>
                    </li>
                ))}
            </ul>

        </div>
    )
}