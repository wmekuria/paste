import React, { Component, useState, useEffect } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import editorStyles from './editorStyles.css';
import "draft-js/dist/Draft.css";
import './App.css'

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];

const EditorBox = (props) => {
    
    const [editorState, setEditorState] = useState(createEditorStateWithText('text'));
    const editor = React.useRef(null); 

    const getCurrentStat = () => {
        console.log(editorState)
    }

    const getTextOnly = () => {
        console.log(editorState.getCurrentContent().getPlainText('\u0001'))
    }

    const getSelection = () => {
        console.log()
    }
      return (
        <div >
            <Toolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div style={{display:'flex'}}>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <CodeButton {...externalProps} />
                  <Separator {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                  <CodeBlockButton {...externalProps} />
                </div>
              )
            }
          </Toolbar>
          <div className='Editor' >
            <Editor
                editorState={editorState}
                plugins={plugins}
                onChange={(newEditorState) => setEditorState(newEditorState)}
                ref={editor}
            />
          </div>

          <button onClick={()=>getTextOnly()}>Save</button>
        </div>
      )
}

export default EditorBox;