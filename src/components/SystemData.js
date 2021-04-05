import React from "react";

const SystemData = () => {
document.body.addEventListener('build', (event) => {   
            console.log(`started! : ${event.detail.request}`);
        })
        
    return (
            <div>
                    <h1>Cpu Info</h1>
            </div>
    );
        
}

export default SystemData;
