import React from 'react'
import "./ProductsTable.css"

export default function ProductsTable() {
    return (
        <div className='mt-3 '>
            <div className="table-responsive">
                <table className="table  text-center">
                    <thead>
                        <tr>
                            <th className='fw-bold'>عکس</th>
                            <th className='fw-bold'>اسم</th>
                            <th className='fw-bold'>قیمت</th>
                            <th className='fw-bold'>موجودی</th>
                            <th className='fw-bold'>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ verticalAlign: "middle" }}>
                            <td>
                                <img className='tb-pr-img' src="./Images/iphone13.jpg" alt="" />
                            </td>
                            <td>
                                آیفون 13
                            </td>
                            <td>
                                2100000
                            </td>
                            <td>
                                5
                            </td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <button className="btn text-white ms-2 btn-sm btn-success">جزئیات</button>
                                    <button className="btn text-white ms-2 btn-sm btn-danger">حذف</button>
                                    <button className="btn text-white ms-2 btn-sm btn-primary">ویرایش</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}