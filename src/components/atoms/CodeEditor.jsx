import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/mode/simple';
import 'codemirror/lib/codemirror.css';

CodeMirror.defineSimpleMode('encodedjwt', {
  start: [
    { regex: /^[A-Za-z0-9_-]+\./, token: 'atom' },
    { regex: /[A-Za-z0-9_-]+\./, token: 'number' },
    { regex: /[A-Za-z0-9_-]+$/, token: 'string' }
  ]
});

const CodeEditor = ({ value, onChange, mode, readOnly = false }) => {
  const textareaRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current && !editorRef.current) {
      editorRef.current = CodeMirror.fromTextArea(textareaRef.current, {
        mode: mode || 'javascript',
        lineWrapping: true,
        singleCursorHeightPerLine: false,
        readOnly: readOnly,
        json: mode === 'javascript'
      });

      editorRef.current.on('change', (instance, changeObj) => {
        if (onChange && changeObj.origin !== 'setValue') {
          onChange(instance.getValue());
        }
      });
    }

    if (editorRef.current && value !== editorRef.current.getValue()) {
      editorRef.current.setValue(value || '');
    }

  }, [value, mode, readOnly, onChange]);

  return (
    <div className="editor-container">
      <textarea ref={textareaRef} defaultValue={value} />
    </div>
  );
};

export default CodeEditor;
