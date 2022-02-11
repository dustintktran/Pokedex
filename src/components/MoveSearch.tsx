import { useState, useEffect } from 'react';

const MoveSearchOverlay = (prop:{isVisible:boolean}) => {

  if(prop.isVisible) {
    return (
      <div>
        
      </div>
    )
  } else {
    return null;
  }
}

export default MoveSearchOverlay;