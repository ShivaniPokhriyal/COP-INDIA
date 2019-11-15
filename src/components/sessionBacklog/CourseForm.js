import React from "react";
import PropTypes from "prop-types";
import TextInput from "../generic/TextInput";
import "./sessionBacklog.css";

const CourseForm = ({ course, onSave, onChange, errors = {} }) => {
  return (
    <div className="col-sm-12 session-detail-background ">
      <form onSubmit={onSave}>
        <h2>Session Backlog Details</h2>
        <hr />
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <div className="col-sm-12">
          <div className="col-sm-4">
            <TextInput
              name="title"
              label="Title"
              readOnly="true"
              value={course.title}
              onChange={onChange}
              error={errors.title}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="keyword"
              label="Keyword"
              value={course.keyword}
              onChange={onChange}
              readOnly="true"
              error={errors.keyword}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="level"
              label="Level"
              readOnly="true"
              value={course.level}
              onChange={onChange}
              error={errors.level}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="category"
              label="Category"
              value={course.category}
              readOnly="true"
              onChange={onChange}
              error={errors.category}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="leadDriver"
              label="LeadDriver"
              value={course.leadDriver}
              onChange={onChange}
              readOnly="true"
              error={errors.leadDriver}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="IsScheduled"
              label="IsScheduled"
              value={course.IsScheduled}
              onChange={onChange}
              readOnly="false"
              error={errors.IsScheduled}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="Notes"
              label="Notes"
              value={course.Notes}
              readOnly="true"
              onChange={onChange}
              error={errors.Notes}
            />
          </div>
          <div className="col-sm-4">
            <TextInput
              name="TotalVotes"
              label="TotalVotes"
              readOnly="true"
              value={course.TotalVotes}
              onChange={onChange}
              error={errors.TotalVotes}
            />
          </div>
          <div className="col-sm-4">
            <button
              href="/sessionBacklog"
              type="submit"
              className="btn btn-primary"
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseForm;
