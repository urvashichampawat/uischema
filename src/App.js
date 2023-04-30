import React, { useState } from "react";
import JSONEditor from "react-json-editor-ajrm";
//import { Button } from "react-bootstrap";
import FormPreview from "./components/FormPreview";

function App() {
  const [schema, setSchema] = useState({});

  const handleSchemaChange = (data) => {
    setSchema(data.jsObject);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h2>JSON Editor</h2>
          <JSONEditor
            id="schema-editor"
            placeholder={schema}
            onChange={handleSchemaChange}
          />
        </div>
        <div className="col-md-6">
          <h2>Form Preview</h2>
          <FormPreview schema={schema} />
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /*import React, { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import FormPreview from "./components/FormPreview";

function App() {
  const [uiSchema, setUiSchema] = useState({});

  const handleJsonChange = (value) => {
    try {
      const uiSchema = JSON.parse(value);
      setUiSchema(uiSchema);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <JsonEditor onJsonChange={handleJsonChange} /> 
      <FormPreview uiSchema={uiSchema} />
    </div>
  );
}

export default App;*/
}

{
  /*import React from "react";
import JsonEditor from "./components/JsonEditor";
import FormPreview from "./components/FormPreview";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <JsonEditor />
      </div>
      <div style={{ flex: "1" }}>
        <FormPreview />
      </div>
    </div>
  );
}

export default App;*/
}

{
  /*import "./App.css";

import React, { useState, useEffect } from "react";
import SchemaEditor from "./components/SchemaEditor";
import FormPreview from "./components/FormPreview";

import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";

function App() {
  const [schema, setSchema] = useState({});

  return (
    <div className="App">
      <div className="editor-container">
        <SchemaEditor onChange={setSchema} />
      </div>
      <div className="preview-container">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
}

export default App;*/
}
