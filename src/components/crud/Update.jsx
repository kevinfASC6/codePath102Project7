import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const Update = () => { 
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState(0);
    const [color, setColor] = useState('');

    useEffect(() => {
        fetchCrewmate();
    }, []);

    async function fetchCrewmate() {
        const { data } = await supabase.from('crewmates').select().eq('_id', id);
        if (data.length === 1) {
            setCrewmate(data[0]);
            setName(data[0].name);
            setSpeed(data[0].speed);
            setColor(data[0].color);
        }
    }

    async function updateCrewmate() {
        const { data, error } = await supabase.from('crewmates').update({ name, speed, color }).eq('_id', id);
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }

    return (
        <div> 
            <h2>Update</h2>
        </div>
    )
};

export default Update;


