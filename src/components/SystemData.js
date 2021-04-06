import React, {Component, useEffect, useState } from "react";


const SystemData = () => {
     const [example, setExample] = useState(null);
     
     const cpuInfo = () => {document.body.addEventListener('build',   function(event)  { 
            setExample(event.detail.request)
            console.log(`started! : ${event.detail.request}`);
        })}
    
    useEffect(() => {
            cpuInfo()
        }, []);
    
    console.log(example, 'example')
        
    return (
        <div>
            <h1>Cpu System Info!!</h1>
            <p>{example}</p>
        </div>)
}
export default SystemData;
