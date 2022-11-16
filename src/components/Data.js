import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Data = () => {
  const navigate = useNavigate();

  //FETCHING API DATA
  useEffect(() => {
    fetch("server.php")
    .then(res => res.json())
    .then((result) =>{setItem(result)})
    .catch((err)=>{console.log("")});},[]);
  const [item, setItem] = useState([]);


  //PROPERTIES THAT -> 1.checks checker boxes | 2.saves checked objects id's into array that will be used in handleDelete
  const [checked, isChecked] = useState([]);
  const [arrIds, setArrIds] = useState([]);


  //EVERY TIME A CHECKERBOX IX CHECKED "IF" STATEMENT WILL RUN AND WHEN ITS UNCHECKED "ELSE" STATEMENT WILL RUN
  //WHEN U CHECK A CHECKERBOX, THE ID WILL BE ADDED TO THE ARRAY AND WHEN U UNCHECK IT, IT WILL BE REMOVED FROM THE ARRAY 
  const handleCheck = (event) => {
    var updateList = [...checked];
    if (event.target.checked)
    {
      updateList = [...checked, event.target.value];
      setArrIds(updateList);
    }
    else
    {
      updateList.splice(checked.indexOf(event.target.value), 1);
    }
    isChecked(updateList);
    console.log(updateList);
  };


  //SENDING ARRAY OF ID'S THAT NEED TO BE DELETED TO PHP THAT DELETES SELECTED OBJECTS
  const handleDelete = (e) => {
    var number = [...checked];
    var delForm = {number};
    fetch("delete.php", {
    method: 'POST',
    body:JSON.stringify(delForm)
    })
    .then(res => res.json())
    .then((result) =>{
    })
    .catch((err)=>{console.log(err)});
    window.location.reload(false);
}

  return(
    <div className='container-fluid'>
      <div className='row button-area'>
        <h3 className='product-list-title col-6'>Product List</h3>
        <button onClick={handleDelete} id="delete-product-btn" className='col-2'>MASS DELETE</button>
      </div>
      <hr></hr>
      <div className='row justify-content-evenly'>
      {item.map(Data => (
        <div key={Data.id} className={Data.attribute+" product-box col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12"}>
          <div style={{width: '100%', height: '25px'}}>
            <input type="checkbox" className="form-check-input checkbox delete-checkbox" value={Data.id} defaultChecked={!!checked[Data.id]} onChange={(e) => {handleCheck(e);}}/>
          </div>
          <div className='box-sku'>{Data.sku}</div>
          <div className='box-name'>{Data.name}</div>
          <div className='box-price'>{Data.price} $</div>
          <div className='box-attribute'>{Data.attribute} :</div>
          <div className='box-value'>{Data.attribute_value}</div>
          
        </div>
       ))
      }
      </div>
    </div>
  )
}



export default Data;