import React from "react";
import { connect } from "react-redux";

export const Loading = ({ isLoading }) => (
  <div>
    {isLoading && (
      <div className="ajax-overlay">
        <p>Loading</p>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  isLoading: state.loading > 0
});

export default connect(mapStateToProps)(Loading);
