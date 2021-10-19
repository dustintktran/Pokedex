import React, { FC } from 'react';
import { Button, Input } from 'antd';

const Query = () => (
  <div className="PokeLookup">
    <Input placeholder="Search by Name or ID"/>
    <Button>Search</Button>
  </div>
);

export default Query;