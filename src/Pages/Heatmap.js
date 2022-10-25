import React from 'react';
import '../styles/HeatMap.css';
import heatmap from '../public/heatmap-retail-stores.png';

const Heatmap = () => {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 300);

    }, [])
    const style_1 = {
        opacity: loaded ? 1 : 0,
        transition: '0.3s'
    };

    const style_2 = {
        opacity: !loaded ? 1 : 0,
    };

    return (
        <div className="heatmap-container">
            <img style={style_1} className='heatmap-img' src={heatmap} />
            <div style={style_2} class="loader"></div>
        </div>
    )
}

export default Heatmap;