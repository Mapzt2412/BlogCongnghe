import React, { Component, useEffect, useState } from 'react';
import { EditorProps  } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 
import dynamic from 'next/dynamic' 
import { Button } from 'react-bootstrap';
import EditingDemo  from '../components/CreateTable';


export default function Home() {
    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/CreateTable'),
        { ssr: false }
      )

    const [editor, setEditor] = useState<boolean>(false)
            useEffect(() => {
                setEditor(true)
            })
            let input = null;
            return (
                <>
                <DynamicComponentWithNoSSR />
                </>
            )
  }