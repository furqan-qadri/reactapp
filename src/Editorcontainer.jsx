import React from 'react';
import ReactDOM from 'react-dom/client';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';
 import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
            import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
            import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
            import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
            import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

class EditorContainer extends React.Component {
  componentDidMount() {
    const root = ReactDOM.createRoot(document.getElementById('editor'));
    root.render(
      <div>
        <FroalaEditorComponent tag='textarea'/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2 className='text-2xl mb-5 p-4'>testing the Froala Editor for aai</h2>
        <div id="editor" className='p-4'></div>
      </div>
    );
  }
}

export default EditorContainer;
