import React from 'react'

import './Gallery.css'

const Pagination = (props) => {
  return (
    <table className="table text-conter">
        <thead>
            <th className="p-3">Filter-All</th>
        </thead>
        <tbody className='gall-pagi-container'>
          {props.users.map(user => (
            <tr key={user.id}>
                <td><img className='image-galleryy' src={user.imageName}alt="" /></td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}
export default Pagination










// import React from 'react'

// import './Gallery.css'

// const Pagination = (props) => {
//   return (
//     <table className="table text-conter">
//         <thead>
//             <th className="p-3">Filter-All</th>
//         </thead>
//         <tbody className='gall-pagi-container'>
//           {props.users.map(user => (
//             <tr key={user.id}>
//                 <td><img className='image-galleryy' src={user.imageName}alt="" /></td>
//             </tr>
//           ))}
//         </tbody>
//     </table>
//   )
// }
// export default Pagination



