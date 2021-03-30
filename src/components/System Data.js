import React from 'react';

const SystemData = () => {
    return (
       <div>
          <h1>System Data</h1>
               <h2>Display Information</h2>
               <div id="display-list">
                <i> Loading ...</i>
                </div>
                <h2>CPU Information</h2>
                <div id="cpu-info">
                <i> Loading ...</i>
                </div>
                <h2>Memory Information</h2>
                <div id="memory-info">
                <i>Loading...</i>
                </div>
                <h2>Storage Information</h2>
                <div id="storage-list">
                <i>Loading ...</i>
            </div>
       </div>
    );
}
export default SystemData;
