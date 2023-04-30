import React, { useState } from "react";
import locale from "react-json-editor-ajrm/locale/en";

const JsonEditor = ({ onJsonChange }) => {
  const [json, setJson] = useState("");

  const handleJsonChange = (e) => {
    const value = e.target.value;
    setJson(value);
    onJsonChange(value);
  };

  return (
    <div>
      <textarea value={json} onChange={handleJsonChange} />
    </div>
  );
};

export default JsonEditor;

{
  /*import React, { useState } from "react";
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

export default FormPreviewer;*/
}

{
  /*import React, { useState, useEffect } from "react";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";

function SchemaEditor() {
  const [schema, setSchema] = useState({});

  function handleOnChange(json) {
    setSchema(json);
  }

  useEffect(() => {
    const editor = new JSONEditor(document.getElementById("json-editor"), {
      mode: "text",
    });
    editor.set(schema);

    editor.on("change", () => {
      handleOnChange(editor.get());
    });

    return () => {
      editor.destroy();
    };
  }, [schema]);

  return <div id="json-editor" style={{ height: "100%" }} />;
}

export default SchemaEditor;*/
}
{
  /*import React, { useState, useEffect } from "react";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";

function SchemaEditor() {
  const [schema, setSchema] = useState({});

  function handleOnChange(json) {
    setSchema(json);
  }

  useEffect(() => {
    const editor = new JSONEditor(document.getElementById("json-editor"), {
      mode: "text",
    });
    editor.set(schema);

    editor.subscribe("change", () => {
      handleOnChange(editor.get());
    });

    return () => {
      editor.destroy();
    };
  }, [schema]);

  return <div id="json-editor" style={{ height: "100%" }} />;
}

export default SchemaEditor;



useEffect(() => {
  const editor = new JSONEditor(document.getElementById("json-editor"), {
    mode: "text",
  });
  editor.set(schema);

  editor.on("change", () => {
    handleOnChange(editor.get());
  });

  return () => {
    editor.destroy();
  };
}, [schema]);
const [formData, setFormData] = useState({});
useEffect(() => {
  const schemaData = JSON.parse(JSON.stringify(schema));
  const editor = new JSONEditor(document.getElementById("form-editor"), {});
  editor.set(schemaData);

  setFormData(editor.getValue());

  editor.on("change", () => {
    setFormData(editor.getValue());
  });

  return () => {
    editor.destroy();
  };
}, [schema]);*/
}
