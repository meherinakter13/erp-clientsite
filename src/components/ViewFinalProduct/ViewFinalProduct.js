import React, { useEffect, useState } from 'react';

const ViewFinalProduct = () => {
    const [finalProducts, setFinalProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get_all_products')
            .then(res => res.json())
            .then(data => setFinalProducts(data))
    }, [])
    return (
        <section className="fluid-container">
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
              
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <div className="row">
                    {
                        finalProducts.map(product => <div className="col-md-12 col-sm-12">
                            <table class="table table-primary table-bordered">
                                <thead>
                                    <tr>
                                        <th className="" scope="col">Image</th>
                                        <th className="" scope="col">Product Name</th>
                                        <th className="" scope="col">Measurement</th>
                                        <th className="" scope="col">Color</th>
                                        <th className="" scope="col">Quantity</th>
                                        <th className="" scope="col">Quantity of Fabric</th>
                                        <th className="" scope="col">Time</th>
                                        <th className="" scope="col">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=""><img style={{width:"150px",height:"150px"}} src={product.image} alt=""/></td>
                                        <td className="">{product.productname}</td>
                                        <td className="">{product.measurement}</td>
                                        <td className="">{product.color}</td>
                                        <td className="">{product.quantity}</td>
                                        <td className="">{product.qnty_fabric}</td>
                                        <td className="">{product.timing}</td>
                                        <td className="">{product.costing}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default ViewFinalProduct;