import React from 'react';

const Count = (props) => {
    const count=props.count;
    let total=0;
    for(let i=0;i<count.length;i++){
        const user=count[i];
        total=total+user.salary;
    }
    return (
        <div>
              <h3>Count summary</h3>
          <h4>User added: {count.length}</h4>
          <h4>Total income: {total}</h4>
        </div>
    );
};

export default Count;