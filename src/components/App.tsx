import React, { FC, useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import Query from './Query';



const App = () => {
  const [isLookupVisible, setIsLookupVisible] = useState(false);

  useEffect(() => {
    console.log(isLookupVisible);
  })
  const openLookup = () => { 
    setIsLookupVisible(true);
  };
  const handleOk = () => { 
    setIsLookupVisible(false);
  };
  const handleCancel = () =>  {
    setIsLookupVisible(false);
  }
  return (
    <div className="App">
      <Button onClick={openLookup}>Open Search Modal</Button>
      <div>hello! {isLookupVisible} ===</div>
      <Modal title="Search" visible={isLookupVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true} >
        <Query />
      </Modal>
    </div>
  )
}
export default App;

/*
footer={[
  <Button onClick={closeLookup}> Close </Button>
]}

*/