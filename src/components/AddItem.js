import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const POSTdata = () => {
    const navigate = useNavigate();

    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////FETCHING JSON DATA FROM PHP////////
    //////////////////////////////////////////
    useEffect(() => {
        fetch(process.env.REACT_APP_FETCH_URL)
        .then(res => res.json())
        .then((result) => { setItem(result) })
        .catch((err) => { console.log("") })
    });
    const [item, setItem] = useState([]);

    //PROPERTIES THAT HANDLE THE INPUTS
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [attribute, setAttribute] = useState('');
    const [attribute_value, setValue] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState();

    var skuCheck = item.map(POSTdata => (POSTdata.sku));

    //SENDS THE PROPERTIES DATA TO PHP ADD FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        const regForm = { sku, name, price, attribute, attribute_value, height, width, length, weight };

        //CANPOST CHECKS IF SKU IS TAKEN OR NOT
        var canPost = 1;
        skuCheck.map((index) => {
            if (index != regForm.sku) {
                //console.log("SKU NOT TAKEN")
            }
            else {
                canPost = 0;
            }
        });


        //IF SKU IS TAKEN, U WILL GET A SHORT ERROR. IF SKU IS NOT TAKEN, DATA WILL BE POSTED
        switch (canPost) {
            case 0:
                setError(0);
                break;
            case 1:
                fetch('http://localhost/fetch/root/public/post.php', {
                    method: 'POST',
                    body: JSON.stringify(regForm)
                })
                    .then(res => res.json())
                    .then((result) => { })
                    .catch((err) => { console.log("") })
                navigate('/');
                break;

        }

    }

    const handleCancel = () => {
        navigate('/');
    }



    return (
        <div>
            <form onSubmit={handleSubmit} id="product_form">
                <div className='row'>
                    <div className='row input-field'>
                        <div className='col-12' style={{ marginBottom: '30px' }} onClick={handleCancel}><button id='cancel-btn'>X</button></div>
                        <h3 className='col-3'>SKU</h3>
                        <input className='col-7' type="text" placeholder="SKU876ABC123" pattern="[a-zA-Z0-9-]+" maxLength="30" required value={sku} onChange={(e) => setSku(e.target.value)}></input>
                    </div>
                    <div className='row input-field'>
                        <h3 className='col-3'>Name</h3>
                        <input type="text" className='col-7' placeholder="Green Table variant 07" maxLength="20" required value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='row input-field'>
                        <h3 className='col-3'>Price</h3>
                        <input type="number" className='col-7' placeholder="124.70 ($)" maxLength="20" required value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <div className='row input-field'>
                        <h3 className='col-2'>Attribute</h3>
                        <select value={attribute} className='col-5' onChange={(e) => setAttribute(e.target.value)} required="required">
                            <option value="">Select</option>
                            <option id="DVD">Weight</option>
                            <option id="Furniture">Dimension</option>
                            <option id="Book">Size</option>
                        </select>
                    </div>
                    {
                        attribute === 'Weight' && (
                            <div className='row input-field'>
                                <h3 className='col-3' maxLength="10">Weight</h3>
                                <input type="number" required className='col-7' placeholder="4 (kg)" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                                <div className='add-description'>Please, provide weight (kg)</div>
                                <br></br>
                            </div>
                        )
                    }

                    {
                        attribute === 'Dimension' && (
                            <div className='row input-field dimensions'>
                                <hr style={{ width: '80%', textAlign: 'center' }}></hr>
                                <div className='col-3 hwl'>
                                    <h3 className='hwltext' maxLength="10">Height</h3>
                                    <input type="number" className='hwl' required value={height} placeholder="11 (cm)" onChange={(e) => setHeight(e.target.value)}></input>
                                </div>
                                <div className='col-1 xstyle'>x</div>
                                <div className='col-3 hwl'>
                                    <h3 className='hwltext' maxLength="10">Width</h3>
                                    <input type="number" className='hwl' required value={width} placeholder="22 (cm)" onChange={(e) => setWidth(e.target.value)}></input>
                                </div>
                                <div className='col-1 xstyle'>x</div>
                                <div className='col-3 hwl'>
                                    <h3 className='hwltext' maxLength="10">Length</h3>
                                    <input type="number" className='hwl' required value={length} placeholder="33 (cm)" onChange={(e) => setLength(e.target.value)}></input>
                                </div>
                                <br></br>
                                <div className='add-description'>Please, provide dimensions (cm)</div>
                            </div>
                        )
                    }

                    {
                        attribute === 'Size' && (
                            <div className='row input-field'>
                                <h3 className='col-3'>Value</h3>
                                <input type="number" className='col-7' required placeholder="100 (mb)" value={attribute_value} onChange={(e) => setValue(e.target.value)}></input>
                                <div className='add-description'>Please, provide size (mb)</div>
                                <br></br>
                            </div>
                        )
                    }


                    {
                        error === 0 && (
                            <div id="error-field">
                                <h3>SKU TAKEN</h3>
                            </div>

                        )
                    }


                </div>
                <button type='submit' form='product_form' id="save-product-btn">Save</button>
            </form>
        </div>
    )



}


export default POSTdata;


