import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/* const sendDebugmessage = (propX, message) => {
  console.log(propX);
  return;
}; */
const Country = props => {
  const country = props.country || {};
  const fields = props.fields || {};

  return (
    <React.Fragment>
      <tr onClick={() => props.onClick(props)}>
        {fields.map(field =>
          Object.entries(country).map((key, index) => {
            if (field == key[0]) {
              return (
                <td className="col-1" key={index}>
                  {key[1]}
                </td>
              );
            }
            return null;
          })
        )}
      </tr>
    </React.Fragment>
  );
};

export default Country;
