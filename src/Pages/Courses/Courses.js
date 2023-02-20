import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import "./Courses.css";

const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("CourseData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="row container m-auto">
      <div className="col-4 text-start">
        <h4 className="text-start">all categories</h4>
        <ul className="category-list bg-light py-3">
          <li>Masters</li>
          <li>Honours</li>
          <li>Hsc</li>
          <li>Ssc</li>
          <li>Jsc</li>
          <li>Psc</li>
        </ul>
      </div>
      <div className="col-8">
        {data.map((dt) => (
          <Card dt={dt}></Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
