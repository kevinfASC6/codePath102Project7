import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const Info = (info) => { 
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        async function fetchCrewmate() {
            console.log('Fetching crewmate with ID:', id);
            const { data, error } = await supabase
                .from('crewmates')
                .select()
                .eq('id', id);
            console.log('Crewmate data:', data);
            console.log('Error fetching crewmate:', error);
            if (data) {
                setCrewmate(data[0]);
            }
        }
        fetchCrewmate();
    }, [id]);

    console.log('Crewmate state:', crewmate);

    return (
        <div> 
            <h2>Crewmate Info</h2>
            {crewmate && (
                <div>
                    <h3>{crewmate.name}</h3>
                    <p>Speed: {crewmate.speed} mph</p>
                    <p>Color: {crewmate.color}</p>
                </div>
            )}
        </div>
    )
};

export default Info;
