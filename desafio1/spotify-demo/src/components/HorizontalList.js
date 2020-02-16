import React from 'react';
import './HorizontalListStyles.css';

  function handleClick(idAlbum){
    alert("¿Quieres escuchar el album " +idAlbum+" ?");
  };

  function listAlbums(props){
    return (
        <div className="container">
          {props.albums.map(tile => (
            <div key={tile.img}>
              <img onClick={function(event){ handleClick(tile.id); props.action()}} className="element" src={tile.img} alt="" />
            </div>
          ))}
        </div>
    );
  };

export default function renderListAlbums(props){
    return <div>
    <div className="element_title">
        {props.title}
        </div>
        {listAlbums(props)}
    </div>
}