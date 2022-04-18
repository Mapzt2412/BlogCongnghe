import React, { useEffect, useRef } from "react";


function EditorMath({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("ckeditor5-build-classic-mathtype")
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
            name={name}
            type=""
            editor={ClassicEditor}
            config={{
            toolbar: {
              shouldNotGroupWhenFull: true,
              items: [
                
                "MathType",
                "ChemType",
                "|",
                "undo",
                "redo",
                
              ]
            }
          }}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default EditorMath;