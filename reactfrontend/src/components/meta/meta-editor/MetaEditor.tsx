import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useRef, useEffect } from 'react';
import "./meta-editor.scss";

export function MetaEditor({ article, onEditorChange }) {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor.setData(article.body);
    }
  }, [article.body]);

  const handleEditorChange = (_event, editor) => {
    const data = editor.getData();
    onEditorChange(data);
  };

  return (
    <section className="editor">
      <CKEditor
        editor={ClassicEditor}
        onChange={handleEditorChange}
      />
    </section>
  );
}
