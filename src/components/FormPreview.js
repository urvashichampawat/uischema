import React, { useState } from "react";
import Form from "react-jsonschema-form";
import JsonEditor from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

function FormPreviewer() {
  const [schema, setSchema] = useState({});

  const handleOnChange = (json) => {
    setSchema(json);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <JsonEditor value={schema} onChange={handleOnChange} locale={locale} />
      </div>
      <div style={{ flex: 1 }}>
        <Form schema={schema} />
      </div>
    </div>
  );
}

export default FormPreviewer;

{
  /*import React from "react";

function FormPreview({ schema }) {
  // Render the form based on the schema
  return <div>Form Preview</div>;
}
export default FormPreview;

{*/
}
/*import React from "react";

const FormPreview = ({ uiSchema }) => {
  return (
    <div>
      <h1>Form Preview</h1>
      <pre>{JSON.stringify(uiSchema, null, 2)}</pre>
    </div>
  );
};

export default FormPreview;*/

{
  /*import React, { useState, useEffect } from "react";

import Form from "react-jsonschema-form";
import JsonEditor from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

function FormPreview({ uiSchema }) {
  const [formData, setFormData] = useState({});
  const [schema, setSchema] = useState({});

  useEffect(() => {
    setSchema(uiSchema);
  }, [uiSchema]);

  function handleOnChange({ formData }) {
    setFormData(formData);
  }

  return (
    <JSONSchemaForm
      schema={schema}
      onChange={handleOnChange}
      formData={formData}
    />
  );
}

export default FormPreview;*/
}
