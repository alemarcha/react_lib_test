import React from 'react';
import { Alert } from 'reactstrap';

const AlertLib = (props) => {
  return (
    <div>
      <Alert color="primary">
        {props.message}
      </Alert>
    </div>
  );
};

export {AlertLib};