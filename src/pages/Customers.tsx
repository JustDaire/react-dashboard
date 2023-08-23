import React from 'react';
import Users from '../data/users';

const Customers = () => {
  return (
    <>
      <h1>Customers</h1>
      <table className="table table-bordered">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
        </tr>
      </table>
    </>
  );
};

let admins = require('~/app/admins.json');
console.log(admins[0].userName);

console.log();

export default Customers;
