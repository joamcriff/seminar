import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fecthAsyncGetAlbums} from '../../redux/todoSlice'

function Main() {
    const [isDisplay, setIsDisplay] = useState(false);
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.albums)
    useEffect(() => {
        async function fetchData() {
            // You can await here
          dispatch(fecthAsyncGetAlbums())
          }
          fetchData();
    }, [dispatch])
    const handleClick = () => {
        setIsDisplay(!isDisplay);
    }

    return (
        <div className='main'>
            <button className='btn' onClick={handleClick}>Toggle</button>
            {albums.map((album, key) => {
                return(
                    <div key={key} className='albums' style={{display:  isDisplay ? "block" : "none"}}>
                        <p key={album.id}>{album.id}: {album.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Main;