import dynamic from "next/dynamic"
import { useEffect,useState } from "react"
import { Col, Row } from "react-bootstrap"
import { EditorProps  } from 'react-draft-wysiwyg'

export const ContentCode = (props)=>{
    const Editor = dynamic<EditorProps >(
        () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
        { ssr: false }
      )
      const [editor, setEditor] = useState<boolean>(false)
      useEffect(() => {
        setEditor(true)
      })
    return(<>
    <Row className="TextContainer">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Nội dung
                  </div>
                </div>
                {editor ? (
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        toolbar={{
                            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'fontFamily', 'colorPicker','emoji','history'],
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true }
                        }}
                    />) : null}
              </Col>
              
              <Col lg={1} style={{ lineHeight: "89px", paddingLeft: "16px" }}>
                <div
                  className="deleteIcon"
                  onClick={()=>{props.parentCallback(props.class)}}
                >
                  X
                </div>
              </Col>
              
            </Row>
    </>
    )
    ;
}