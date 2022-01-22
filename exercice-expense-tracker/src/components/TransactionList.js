import React from 'react';
 
 const TransactionList = ()=>{
      return(
          <div>
              <h3>Hitory</h3>
              <ul  className="list"> 
              <li className="minus">
                  cash <button className="delete-btn">x</button><span>-$400</span>
              </li>
              </ul>
          </div>
      )
 }
  export default TransactionList;