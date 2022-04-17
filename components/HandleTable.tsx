import React, { Component, useEffect, useRef, useState } from 'react';
import { EditorProps  } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 
import dynamic from 'next/dynamic' 
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export function HandleTable(props) {
    const [show, setShow] = useState(props.show);
    const [showHandleCol, setShowHandleCol] = useState(0);
    const [showTable, setShowtable] = useState(false);
    const colInput = useRef(null)
    const rowInput = useRef(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/CreateTable'),
        { ssr: false }
      )
    let element = (
        <>
            </>
    );
    
    const handleCol = () =>{
        
            for (let i = 0; i< showHandleCol;i++){
                element = <>{element} <div><div style={{margin: "20px 0px"}}>
                <Form.Control type="text" placeholder="Tên cột" className={"name"+String(i)} ref={colInput}/>
                    <Form.Select aria-label="Default select example"className={"type"+String(i)}>
                        <option>Kiểu dữ liệu</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                        <option value="date">Date</option>
                    </Form.Select>
                </div>
                </div></> ;
        }
        return(
            <>
            {element}
            </>
        );
    }
    let rowNum = 0;
    if( rowInput.current){
        rowNum= rowInput.current.value;
    }
    let arrName: string[]=[];
    let arrType: string[]=[];
    for (let i = 0; i< showHandleCol;i++){
        if( document.querySelector(".name"+String(i))){
            arrName[i]= document.querySelector(".name"+String(i)).value;
        }
        
    }
    for (let i = 0; i< showHandleCol;i++){
        if( document.querySelector(".type"+String(i))){
            arrType[i]= document.querySelector(".type"+String(i)).value;
        }
        
    }
    const [editor, setEditor] = useState<boolean>(false)
            useEffect(() => {
                setEditor(true)
            })
            let input = null;
            return (
                <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Số cột - Số hàng
                    <div className="row-col">
                        <Form.Control type="text" placeholder="Số cột" id="row" ref={colInput} />
                        
                        <Form.Control type="text" placeholder="Số hàng" id="col" ref={rowInput}/>
                    </div>
                    <Button onClick={()=>{setShowHandleCol(colInput.current.value)}}> Lưu </Button>
                    {handleCol()}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        setShowtable(true);
                        handleClose();
                        }}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

                {(showTable == true) ? (<DynamicComponentWithNoSSR row = {rowNum} arrName = {arrName}  arrType = {arrType}/>) : null}
                </>
            )
  }