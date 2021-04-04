import React from "react";

const SystemData = () => {
       document.body.addEventListener('build', function(event) {   
           process(event.detail)
            console.log('get started');
        });
    return (
            <div>
                    <h1>Cpu Info</h1>
            </div>
    );
        
}

export default SystemData;
