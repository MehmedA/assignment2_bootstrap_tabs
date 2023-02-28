import { data } from "../helper/data"
import React from 'react'
import FilmYear from '../components/FilmYear';
import FilmInfo from '../components/FilmInfo';

const Main = () => {
// console.log(data);
  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div"> 
      <FilmYear data={data} />
      {data.map((item, id) => (
        <FilmInfo data={item} key={id} />
      ))}
    </div>
  );
}

export default Main