import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./sessionBacklog.css";

const CourseList = ({ courses, handleToggle }) => (
  <div className="col-sm-12 session-background">
    <table className="table ">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Keyword</th>
          <th>Level</th>
          <th>Category</th>
          <th>Lead Driver</th>
          <th>Is Scheduled</th>
          <th>Notes/Pre-requisites</th>
          <th>Total Votes</th>
          <th>Vote-Up</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.keyword}</td>
              <td>{course.level}</td>
              <td>{course.category}</td>
              <td>{course.leadDriver}</td>
              <td>{course.IsScheduled}</td>
              <td>{course.Notes}</td>
              <td>{course.TotalVotes}</td>
              <td>
                <label className="switch">
                  <input onChange={handleToggle} type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  handleToggle: PropTypes.string.isRequired
};

export default CourseList;
