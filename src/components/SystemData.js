import React, { useEffect, useState } from "react";

const SystemData = () => {
     const [cpu, setCpu] = useState(null);
     const [memory, setMemory] = useState(null);
     const cpuInfo = () => {document.body.addEventListener('build',   function(event)  { 
            setCpu(event.detail.request)
            console.log(`started! : ${event.detail.request}`);
        })}
    
    const memoryUsage = () => {document.body.addEventListener('build',   function(event)  { 
        setMemory(event.detail.request)
        console.log(`started! : ${event.detail.request}`);
    })}
    
    useEffect(() => {
            cpuInfo()
            memoryUsage()
        }, []);
    console.log(memory, 'example')
    return (
        <div>
            <h1>Cpu System</h1>
                <div><p>{cpu}</p></div>
                <div><p>{memory}</p></div>
        </div>)
}
export default SystemData;
