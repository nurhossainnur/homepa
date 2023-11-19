import React from 'react'
const PaginatonMain = (props) => {

    return (
        <ul className="pagination pagination-md justify-nontent-end">
            <li onClick={() => props.onPageChange(e.target.value)} className="page-item "><span onClick={() => props.onPageChange(e.target.value)} className="page-link">1</span></li>       
            <li className="page-item active"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">3</span></li>             
        </ul>
  )
}

export default PaginatonMain



// import React from 'react'
// const PaginatonMain = (props) => {

//     return (
//         <ul className="pagination pagination-md justify-nontent-end">
//             <li className="page-item">
//                 <span onClick={() => props.onPageChange("&laquo;")} className="page-link">&laquo;</span>
//             </li>
//             <li className="page-item">
//                 <span onClick={() => props.onPageChange("&rsaquo;")} className="page-link">&rsaquo;</span>
//             </li> 
//             <li key={value} className="page-item active">
//                 <span onClick={() => props.onPageChange(value)} className="page-link">{value}</span>
//             </li>       
//             <li className="page-item">
//                 <span onClick={() => props.onPageChange("&lsaquo;")} className="page-link">&lsaquo;</span>
//             </li>
//             <li className="page-item">
//                 <span onClick={() => props.onPageChange("&raquo;")} className="page-link">&raquo;</span>
//             </li>             
//         </ul>
//   )
// }

// export default PaginatonMain




// import React from 'react'
// import { returnPaginationRange } from './AppUtills'
// const PaginatonMain = (props) => {
//     let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);

//     return (
//             <ul className="pagination pagination-md justify-nontent-end">
//                 <li className="page-item">
//                     <span onClick={() => props.onPageChange("&laquo;")}  className="page-link">&laquo;</span>
//                 </li>
//                 <li className="page-item">
//                     <span onClick={() => props.onPageChange("&rsaquo;")} className="page-link">&rsaquo;</span>
//                 </li> 
//                 {array.map(value =>{
//                     if (value === props.page) {
//                         return(
//                             <li key={value} className="page-item active">
//                             <span onClick={() => props.onPageChange(value)} className="page-link">{value}</span></li>
//                         )
//                     }else{
//                         return(
//                             <li key={value} className="page-item">
//                                 <span onClick={() => props.onPageChange(value)}  className="page-link">{value}</span>
//                             </li>
//                         )
//                     }
//                 })}
//             <li className="page-item">
//                 <span onClick={() => props.onPageChange("&lsaquo;")}  className="page-link">&lsaquo;</span>
//             </li>

//             <li className="page-item">
//                 <span onClick={() => props.onPageChange("&raquo;")}  className="page-link">&raquo;</span>
//             </li>             
//         </ul>
//   )
// }

// export default PaginatonMain
