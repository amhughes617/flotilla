import React, { Component } from 'react';
import { UPDATE_LOC_SEARCH as UPDATE } from '../actions/index';

/*search bar recieves onSubmit, updateInput, and input as props form map_page*/
export default (props) => {
  return (
      <div className="input-form">
        <form onSubmit={event => props.onSubmit(event.target.value)}>
          <input
            value={props.input}
            onChange={event => props.updateInput(UPDATE, event.target.value)}
          />
          <button>
            Search
          </button>
        </form>
      </div>
  );
};