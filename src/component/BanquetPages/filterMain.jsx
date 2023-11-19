


// import React, { useEffect, useState } from 'react'
// import './Banquet.css'

//     const images =[
    
//       { id: '1',imageName: 'https://i.ibb.co/Wk68pv2/g1-1.jpg', tag: 'Guru Banquet'},
//       { id: '2',imageName: 'https://i.ibb.co/f4YkWK3/g2-1.jpg', tag: 'Guru Banquet'},
//       { id: '3',imageName: 'https://i.ibb.co/nnjp8DV/g3.jpg', tag: 'Guru Banquet'},
//       { id: '4',imageName: 'https://i.ibb.co/H7K70w8/g4-1.jpg', tag: 'Guru Banquet'},
//       { id: '5',imageName: 'https://i.ibb.co/m67rCHH/g5-1.jpg', tag: 'Guru Banquet'},
//       { id: '6',imageName: 'https://i.ibb.co/9HDMwtq/g6-1.jpg', tag: 'Guru Banquet'},


//         { id: '7',imageName: 'https://i.ibb.co/k8kwKWQ/c7.jpg', tag: 'Table cloths'},
//         { id: '8',imageName: 'https://i.ibb.co/kMDNbJW/c11.jpg', tag: 'Table cloths'},
//         { id: '9',imageName: 'https://i.ibb.co/7vYfCcN/c10.jpg', tag: 'Table cloths'},
//         { id: '10',imageName: 'https://i.ibb.co/QFn6z8B/c9.jpg', tag: 'Table cloths'},
//         { id: '11',imageName: 'https://i.ibb.co/25Y6RxQ/c8.jpg', tag: 'Table cloths'},
//         { id: '12',imageName: 'https://i.ibb.co/LQZC7zw/c1.jpg', tag: 'Table cloths'},
//         { id: '13',imageName: 'https://i.ibb.co/M9TxCHs/c6.jpg', tag: 'Table cloths'},
//         { id: '14',imageName: 'https://i.ibb.co/s9FyvkR/c5.jpg', tag: 'Table cloths'},
//         { id: '15',imageName: 'https://i.ibb.co/0KNtNkt/c4.jpg', tag: 'Table cloths'},
//         { id: '16',imageName: 'https://i.ibb.co/wQbnVfK/c3.jpg', tag: 'Table cloths'},
//         { id: '17',imageName: 'https://i.ibb.co/zGKV6tc/c2.jpg', tag: 'Table cloths'},


//         { id: '18',imageName: 'https://i.ibb.co/mtnSsbn/n1.jpg', tag: 'Napkins availability color'},
//         { id: '19',imageName: 'https://i.ibb.co/1zBggcs/n2.jpg', tag: 'Napkins availability color'},
//         { id: '20',imageName: 'https://i.ibb.co/MG88nF8/n3.jpg', tag: 'Napkins availability color'},
//         { id: '21',imageName: 'https://i.ibb.co/bPmVC59/n4.jpg', tag: 'Napkins availability color'},
//         { id: '22',imageName: 'https://i.ibb.co/pP0Jb9b/n5.jpg', tag: 'Napkins availability color'},
//         { id: '23',imageName: 'https://i.ibb.co/GWQXLSv/n6.jpg', tag: 'Napkins availability color'},
//         { id: '24',imageName: 'https://i.ibb.co/XbCpW5g/n7.jpg', tag: 'Napkins availability color'},
//         { id: '25',imageName: 'https://i.ibb.co/DWZJdZy/n8.jpg', tag: 'Napkins availability color'},
//         { id: '26',imageName: 'https://i.ibb.co/bvwj4x5/n9.jpg', tag: 'Napkins availability color'},
//         { id: '27',imageName: 'https://i.ibb.co/9vhfBh6/n10.jpg', tag: 'Napkins availability color'},
//         { id: '28',imageName: 'https://i.ibb.co/y0HXVxG/n11.jpg', tag: 'Napkins availability color'},
//         { id: '29',imageName: 'https://i.ibb.co/b3DZVwr/n12.jpg', tag: 'Napkins availability color'},
//         { id: '30',imageName: 'https://i.ibb.co/R7KKXvf/n13.jpg', tag: 'Napkins availability color'},


//         { id: '31',imageName: 'https://i.ibb.co/Khj1sqH/s1.jpg', tag: 'Shagun'},
//         { id: '32',imageName: 'https://i.ibb.co/FntLHgd/s2.jpg', tag: 'Shagun'},
//         { id: '33',imageName: 'https://i.ibb.co/nwQgT9c/s3.jpg', tag: 'Shagun'},
//         { id: '34',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
//         { id: '35',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
//         { id: '36',imageName: 'https://i.ibb.co/JqM15bp/s13.jpg', tag: 'Shagun'},
//         { id: '37',imageName: 'https://i.ibb.co/2kNwzwp/s12.jpg', tag: 'Shagun'},
//         { id: '38',imageName: 'https://i.ibb.co/c6YgJVt/s11.jpg', tag: 'Shagun'},
//         { id: '39',imageName: 'https://i.ibb.co/Qrj52c2/s10.jpg', tag: 'Shagun'},
//         { id: '40',imageName: 'https://i.ibb.co/DCR3sVp/s9.jpg', tag: 'Shagun'},
//         { id: '41',imageName: 'https://i.ibb.co/cDkfKLr/s8.jpg', tag: 'Shagun'},
//         { id: '42',imageName: 'https://i.ibb.co/jrczc1z/s7.jpg', tag: 'Shagun'},
//         { id: '43',imageName: 'https://i.ibb.co/qnQnv07/s6.jpg', tag: 'Shagun'},
//         { id: '44',imageName: 'https://i.ibb.co/2PPMg0S/s5.jpg', tag: 'Shagun'},
//         { id: '45',imageName: 'https://i.ibb.co/Xt38PmQ/s4.jpg', tag: 'Shagun'},

//     ]

// function Filter(){
//   const [tag, setTag] = useState('Filter-All');
//   const [filteredImages, setFilteredImages] = useState([]);

//   useEffect( () => {
//     tag == 'Filter-All' ? setFilteredImages(images) : setFilteredImages(images.filter( e => e.tag == tag))
//  }, [tag])

//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 10;

//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = images.slice(firstIndex, lastIndex);
//   const npage = Math.ceil(images.length / recordsPerPage)
//   const numbers = [...Array(npage + 1).keys()].slice(1)



//   const handleClick =(i)=>{
//      setCurrentPage(i)
   
//   }


//   return (  
//     <div className='light-gallery'>
//     <div className='container'>
//             {records.map(e=> 
//                 <img className='image-all image' src={e.imageName}alt="" />
//             )}
//             {
//               numbers.map((n, i) =>
//                 <buton onClick={()=>handleClick(n)}>{n}</buton>
//               )
//             }
//       </div>
//     </div>
//   )
// }

// export default Filter


















// import React, { useEffect, useState } from 'react'
// import './Banquet.css'

//     const images =[
    
//       { id: '1',imageName: 'https://i.ibb.co/Wk68pv2/g1-1.jpg', tag: 'Guru Banquet'},
//       { id: '2',imageName: 'https://i.ibb.co/f4YkWK3/g2-1.jpg', tag: 'Guru Banquet'},
//       { id: '3',imageName: 'https://i.ibb.co/nnjp8DV/g3.jpg', tag: 'Guru Banquet'},
//       { id: '4',imageName: 'https://i.ibb.co/H7K70w8/g4-1.jpg', tag: 'Guru Banquet'},
//       { id: '5',imageName: 'https://i.ibb.co/m67rCHH/g5-1.jpg', tag: 'Guru Banquet'},
//       { id: '6',imageName: 'https://i.ibb.co/9HDMwtq/g6-1.jpg', tag: 'Guru Banquet'},


//         { id: '7',imageName: 'https://i.ibb.co/k8kwKWQ/c7.jpg', tag: 'Table cloths'},
//         { id: '8',imageName: 'https://i.ibb.co/kMDNbJW/c11.jpg', tag: 'Table cloths'},
//         { id: '9',imageName: 'https://i.ibb.co/7vYfCcN/c10.jpg', tag: 'Table cloths'},
//         { id: '10',imageName: 'https://i.ibb.co/QFn6z8B/c9.jpg', tag: 'Table cloths'},
//         { id: '11',imageName: 'https://i.ibb.co/25Y6RxQ/c8.jpg', tag: 'Table cloths'},
//         { id: '12',imageName: 'https://i.ibb.co/LQZC7zw/c1.jpg', tag: 'Table cloths'},
//         { id: '13',imageName: 'https://i.ibb.co/M9TxCHs/c6.jpg', tag: 'Table cloths'},
//         { id: '14',imageName: 'https://i.ibb.co/s9FyvkR/c5.jpg', tag: 'Table cloths'},
//         { id: '15',imageName: 'https://i.ibb.co/0KNtNkt/c4.jpg', tag: 'Table cloths'},
//         { id: '16',imageName: 'https://i.ibb.co/wQbnVfK/c3.jpg', tag: 'Table cloths'},
//         { id: '17',imageName: 'https://i.ibb.co/zGKV6tc/c2.jpg', tag: 'Table cloths'},


//         { id: '18',imageName: 'https://i.ibb.co/mtnSsbn/n1.jpg', tag: 'Napkins availability color'},
//         { id: '19',imageName: 'https://i.ibb.co/1zBggcs/n2.jpg', tag: 'Napkins availability color'},
//         { id: '20',imageName: 'https://i.ibb.co/MG88nF8/n3.jpg', tag: 'Napkins availability color'},
//         { id: '21',imageName: 'https://i.ibb.co/bPmVC59/n4.jpg', tag: 'Napkins availability color'},
//         { id: '22',imageName: 'https://i.ibb.co/pP0Jb9b/n5.jpg', tag: 'Napkins availability color'},
//         { id: '23',imageName: 'https://i.ibb.co/GWQXLSv/n6.jpg', tag: 'Napkins availability color'},
//         { id: '24',imageName: 'https://i.ibb.co/XbCpW5g/n7.jpg', tag: 'Napkins availability color'},
//         { id: '25',imageName: 'https://i.ibb.co/DWZJdZy/n8.jpg', tag: 'Napkins availability color'},
//         { id: '26',imageName: 'https://i.ibb.co/bvwj4x5/n9.jpg', tag: 'Napkins availability color'},
//         { id: '27',imageName: 'https://i.ibb.co/9vhfBh6/n10.jpg', tag: 'Napkins availability color'},
//         { id: '28',imageName: 'https://i.ibb.co/y0HXVxG/n11.jpg', tag: 'Napkins availability color'},
//         { id: '29',imageName: 'https://i.ibb.co/b3DZVwr/n12.jpg', tag: 'Napkins availability color'},
//         { id: '30',imageName: 'https://i.ibb.co/R7KKXvf/n13.jpg', tag: 'Napkins availability color'},


//         { id: '31',imageName: 'https://i.ibb.co/Khj1sqH/s1.jpg', tag: 'Shagun'},
//         { id: '32',imageName: 'https://i.ibb.co/FntLHgd/s2.jpg', tag: 'Shagun'},
//         { id: '33',imageName: 'https://i.ibb.co/nwQgT9c/s3.jpg', tag: 'Shagun'},
//         { id: '34',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
//         { id: '35',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
//         { id: '36',imageName: 'https://i.ibb.co/JqM15bp/s13.jpg', tag: 'Shagun'},
//         { id: '37',imageName: 'https://i.ibb.co/2kNwzwp/s12.jpg', tag: 'Shagun'},
//         { id: '38',imageName: 'https://i.ibb.co/c6YgJVt/s11.jpg', tag: 'Shagun'},
//         { id: '39',imageName: 'https://i.ibb.co/Qrj52c2/s10.jpg', tag: 'Shagun'},
//         { id: '40',imageName: 'https://i.ibb.co/DCR3sVp/s9.jpg', tag: 'Shagun'},
//         { id: '41',imageName: 'https://i.ibb.co/cDkfKLr/s8.jpg', tag: 'Shagun'},
//         { id: '42',imageName: 'https://i.ibb.co/jrczc1z/s7.jpg', tag: 'Shagun'},
//         { id: '43',imageName: 'https://i.ibb.co/qnQnv07/s6.jpg', tag: 'Shagun'},
//         { id: '44',imageName: 'https://i.ibb.co/2PPMg0S/s5.jpg', tag: 'Shagun'},
//         { id: '45',imageName: 'https://i.ibb.co/Xt38PmQ/s4.jpg', tag: 'Shagun'},

//     ]

// function Filter(){
//   const [tag, setTag] = useState('Filter-All');
//   const [filteredImages, setFilteredImages] = useState([]);

//   useEffect( () => {
//     tag == 'Filter-All' ? setFilteredImages(images) : setFilteredImages(images.filter( e => e.tag == tag))
//  }, [tag])

//   const [current, setCurrent] = useState(3);
//   const [count, setCount] = useState(20);

//   const last = current * count;
//   const first = last - count;
//   const values = filteredImages.slice(first, last)

//     const buttonCount = [1,2,3];
//     // for (let i = 1; i <= 3; i++) {
//     //     buttonCount.push[i]
     
//     // }
//   const handleClickOne =(i)=>{
//     setCurrent(i)
//   }

// // console.log(buttonCount)
//   return (  
//     <div className='light-gallery'>
//     <div className='container'>
//             {values.map((e, i)=> 
//                 <img key={i} className='image-all image' src={e.imageName}alt="" />
//             )}
//             {buttonCount.map((btn,i )=>
//               <button key={i} onClick={()=>handleClickOne(btn)}>{btn}</button>
              
//             )}
//       </div>
//     </div>
//   )
// }

// export default Filter








// import React, { useEffect, useState } from 'react'

// import './Banquet.css'
// import Modal from './Modal';

//     const images =[
    
//       { id: '1',imageName: 'https://i.ibb.co/Wk68pv2/g1-1.jpg', tag: 'Guru Banquet'},
//       { id: '2',imageName: 'https://i.ibb.co/f4YkWK3/g2-1.jpg', tag: 'Guru Banquet'},
//       { id: '3',imageName: 'https://i.ibb.co/nnjp8DV/g3.jpg', tag: 'Guru Banquet'},
//       { id: '4',imageName: 'https://i.ibb.co/H7K70w8/g4-1.jpg', tag: 'Guru Banquet'},
//       { id: '5',imageName: 'https://i.ibb.co/m67rCHH/g5-1.jpg', tag: 'Guru Banquet'},
//       { id: '6',imageName: 'https://i.ibb.co/9HDMwtq/g6-1.jpg', tag: 'Guru Banquet'},


//         { id: '7',imageName: 'https://i.ibb.co/k8kwKWQ/c7.jpg', tag: 'Table cloths'},
//         { id: '8',imageName: 'https://i.ibb.co/kMDNbJW/c11.jpg', tag: 'Table cloths'},
//         { id: '9',imageName: 'https://i.ibb.co/7vYfCcN/c10.jpg', tag: 'Table cloths'},
//         { id: '10',imageName: 'https://i.ibb.co/QFn6z8B/c9.jpg', tag: 'Table cloths'},
//         { id: '11',imageName: 'https://i.ibb.co/25Y6RxQ/c8.jpg', tag: 'Table cloths'},
//         { id: '12',imageName: 'https://i.ibb.co/LQZC7zw/c1.jpg', tag: 'Table cloths'},
//         { id: '13',imageName: 'https://i.ibb.co/M9TxCHs/c6.jpg', tag: 'Table cloths'},
//         { id: '14',imageName: 'https://i.ibb.co/s9FyvkR/c5.jpg', tag: 'Table cloths'},
//         { id: '15',imageName: 'https://i.ibb.co/0KNtNkt/c4.jpg', tag: 'Table cloths'},
//         { id: '16',imageName: 'https://i.ibb.co/wQbnVfK/c3.jpg', tag: 'Table cloths'},
//         { id: '17',imageName: 'https://i.ibb.co/zGKV6tc/c2.jpg', tag: 'Table cloths'},


//         { id: '18',imageName: 'https://i.ibb.co/mtnSsbn/n1.jpg', tag: 'Napkins availability color'},
//         { id: '19',imageName: 'https://i.ibb.co/1zBggcs/n2.jpg', tag: 'Napkins availability color'},
//         { id: '20',imageName: 'https://i.ibb.co/MG88nF8/n3.jpg', tag: 'Napkins availability color'},
//         { id: '21',imageName: 'https://i.ibb.co/bPmVC59/n4.jpg', tag: 'Napkins availability color'},
//         { id: '22',imageName: 'https://i.ibb.co/pP0Jb9b/n5.jpg', tag: 'Napkins availability color'},
//         { id: '23',imageName: 'https://i.ibb.co/GWQXLSv/n6.jpg', tag: 'Napkins availability color'},
//         { id: '24',imageName: 'https://i.ibb.co/XbCpW5g/n7.jpg', tag: 'Napkins availability color'},
//         { id: '25',imageName: 'https://i.ibb.co/DWZJdZy/n8.jpg', tag: 'Napkins availability color'},
//         { id: '26',imageName: 'https://i.ibb.co/bvwj4x5/n9.jpg', tag: 'Napkins availability color'},
//         { id: '27',imageName: 'https://i.ibb.co/9vhfBh6/n10.jpg', tag: 'Napkins availability color'},
//         { id: '28',imageName: 'https://i.ibb.co/y0HXVxG/n11.jpg', tag: 'Napkins availability color'},
//         { id: '29',imageName: 'https://i.ibb.co/b3DZVwr/n12.jpg', tag: 'Napkins availability color'},
//         { id: '30',imageName: 'https://i.ibb.co/R7KKXvf/n13.jpg', tag: 'Napkins availability color'},


//         { id: '31',imageName: 'https://i.ibb.co/Khj1sqH/s1.jpg', tag: 'Shagun'},
//         { id: '32',imageName: 'https://i.ibb.co/FntLHgd/s2.jpg', tag: 'Shagun'},
//         { id: '33',imageName: 'https://i.ibb.co/nwQgT9c/s3.jpg', tag: 'Shagun'},
//         { id: '34',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
//         { id: '35',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
//         { id: '36',imageName: 'https://i.ibb.co/JqM15bp/s13.jpg', tag: 'Shagun'},
//         { id: '37',imageName: 'https://i.ibb.co/2kNwzwp/s12.jpg', tag: 'Shagun'},
//         { id: '38',imageName: 'https://i.ibb.co/c6YgJVt/s11.jpg', tag: 'Shagun'},
//         { id: '39',imageName: 'https://i.ibb.co/Qrj52c2/s10.jpg', tag: 'Shagun'},
//         { id: '40',imageName: 'https://i.ibb.co/DCR3sVp/s9.jpg', tag: 'Shagun'},
//         { id: '41',imageName: 'https://i.ibb.co/cDkfKLr/s8.jpg', tag: 'Shagun'},
//         { id: '42',imageName: 'https://i.ibb.co/jrczc1z/s7.jpg', tag: 'Shagun'},
//         { id: '43',imageName: 'https://i.ibb.co/qnQnv07/s6.jpg', tag: 'Shagun'},
//         { id: '44',imageName: 'https://i.ibb.co/2PPMg0S/s5.jpg', tag: 'Shagun'},
//         { id: '45',imageName: 'https://i.ibb.co/Xt38PmQ/s4.jpg', tag: 'Shagun'},

//     ]

    
// //        Table cloths    Napkins availability color
// const Filter = () => {

//   const [tag, setTag] = useState('Filter-All');
//   const [filteredImages, setFilteredImages] = useState([]);

//   const [show, setShow] = useState(false);


//   useEffect( () => {
//     tag == 'Filter-All' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag == tag))
//   }, [tag])

//   const onModalClose = () => {
//     setShow(false);
//   };

//   const [active, setActive] = useState(0);

// const handleClick = (i) =>{
//   setActive(i)
//   setShow(true);
// }
//   return (

//     <div className="main-div-filter">


//         <div className='text-div'>
//             <h3>WE HAVE 3 PARTY HALL</h3>
//             <p>Guru Banquet <span>– 60 to 125 people</span> <br />
//             Shagun <span>– New one 100 to 300 people</span></p>
//         </div>
 
//         <div className="images-all" handleSetTag={setTag} >
//           <div className="tags">
//           <TagButton name="Filter-All" handleSetTag={setTag} tagActive={ tag == 'Filter-All' ? true : false} />
//           <TagButton name="Guru Banquet" handleSetTag={setTag} tagActive={ tag == 'Guru Banquet' ? true : false} />
//           <TagButton name="Shagun" handleSetTag={setTag} tagActive={ tag == 'Shagun' ? true : false} />
//           <TagButton name="Table cloths" handleSetTag={setTag} tagActive={ tag == 'Table cloths' ? true : false} />
//           <TagButton name="Napkins availability color" handleSetTag={setTag} tagActive={ tag == 'Napkins availability color' ? true : false} />
//           </div>
//           <div className='container'>
//             {filteredImages.map((image,i )=> 
//               <div key={image.id} id='image-card' className={i === active ? "active" : ""} onClick={() =>handleClick(i)}>
//                 <img className='image' src={image.imageName} alt="" />
//               </div>)}
//           </div>
//           <Modal title="Lightbox" show={show} onClose={onModalClose}>
//               <ImageSlider active={active} />
//           </Modal>
//         </div>
//     </div> 
//   )
// }

// const ImageSlider = ({active}) =>{
//   return(
//     <div className="image-slider-wrapper">
//        <div className="image-slides">
//         {images.map((e, i) => 
//           <Slides {...e} key={e.id} active={i === active} />
//         )}
//        </div>
//        <div className="image-slider-navigation"></div>
//     </div>
//   );
// };

// const Slides = ({imageName,id,active}) =>{
//   return(
//     <div className="image-slide">
//       <img src={imageName} alt={id}className={active ? "active" : ""}  />
//     </div>
//   );
// };



// const TagButton = ({ name,handleSetTag,tagActive }) =>{
//   return <button className={`tag ${ tagActive ? 'active' : null}`} onClick={ () => handleSetTag(name)}>{name}</button>;
// }

// export default Filter

















// import React, { useEffect, useState } from 'react'

// import './Banquet.css'

//     const images =[

//       { id: '1',imageName: 'g1-1.jpg', tag: 'Guru Banquet'},
//       { id: '2',imageName: 'g2-1.jpg', tag: 'Guru Banquet'},
//       { id: '3',imageName: 'g3.jpg', tag: 'Guru Banquet'},
//       { id: '4',imageName: 'g4-1.jpg', tag: 'Guru Banquet'},
//       { id: '5',imageName: 'g5-1.jpg', tag: 'Guru Banquet'},
//       { id: '6',imageName: 'g6-1.jpg', tag: 'Guru Banquet'},

//         // { id: '7',imageName: 'c1.jpg', tag: 'Table cloths'},
//         { id: '8',imageName: 'c2.jpg', tag: 'Table cloths'},
//         { id: '9',imageName: 'c3.jpg', tag: 'Table cloths'},
//         { id: '10',imageName: 'c4.jpg', tag: 'Table cloths'},
//         { id: '11',imageName: 'c5.jpg', tag: 'Table cloths'},
//         { id: '12',imageName: 'c6.jpg', tag: 'Table cloths'},
//         { id: '13',imageName: 'c7.jpg', tag: 'Table cloths'},
//         { id: '14',imageName: 'c8.jpg', tag: 'Table cloths'},
//         { id: '15',imageName: 'c9.jpg', tag: 'Table cloths'},
//         { id: '16',imageName: 'c10.jpg', tag: 'Table cloths'},
//         { id: '17',imageName: 'c11.jpg', tag: 'Table cloths'},

//         { id: '18',imageName: 'n1.jpg', tag: 'Napkins availability color'},
//         { id: '19',imageName: 'n2.jpg', tag: 'Napkins availability color'},
//         { id: '20',imageName: 'n3.jpg', tag: 'Napkins availability color'},
//         { id: '21',imageName: 'n4.jpg', tag: 'Napkins availability color'},
//         { id: '22',imageName: 'n5.jpg', tag: 'Napkins availability color'},
//         { id: '23',imageName: 'n6.jpg', tag: 'Napkins availability color'},
//         { id: '24',imageName: 'n7.jpg', tag: 'Napkins availability color'},
//         { id: '25',imageName: 'n8.jpg', tag: 'Napkins availability color'},
//         { id: '26',imageName: 'n9.jpg', tag: 'Napkins availability color'},
//         { id: '27',imageName: 'n10.jpg', tag: 'Napkins availability color'},
//         { id: '28',imageName: 'n11.jpg', tag: 'Napkins availability color'},
//         { id: '29',imageName: 'n12.jpg', tag: 'Napkins availability color'},
//         { id: '30',imageName: 'n13.jpg', tag: 'Napkins availability color'},

//         { id: '31',imageName: 's1.jpg', tag: 'Shagun'},
//         { id: '32',imageName: 's2.jpg', tag: 'Shagun'},
//         { id: '33',imageName: 's3.jpg', tag: 'Shagun'},
//         { id: '34',imageName: 's4.jpg', tag: 'Shagun'},
//         { id: '35',imageName: 's5.jpg', tag: 'Shagun'},
//         { id: '36',imageName: 's6.jpg', tag: 'Shagun'},
//         { id: '37',imageName: 's7.jpg', tag: 'Shagun'},
//         { id: '38',imageName: 's8.jpg', tag: 'Shagun'},
//         { id: '39',imageName: 's9.jpg', tag: 'Shagun'},
//         { id: '40',imageName: 's10.jpg', tag: 'Shagun'},
//         { id: '41',imageName: 's11.jpg', tag: 'Shagun'},
//         { id: '42',imageName: 's12.jpg', tag: 'Shagun'},
//         { id: '43',imageName: 's13.jpg', tag: 'Shagun'},
//         { id: '44',imageName: 's14.jpg', tag: 'Shagun'},
//         { id: '45',imageName: 's15.jpg', tag: 'Shagun'},

//     ]
// //        Table cloths    Napkins availability color
// const Filter = () => {

//   const [tag, setTag] = useState('Filter-All');
//   const [filteredImages, setFilteredImages] = useState([]);

//   useEffect( () => {
//     tag == 'Filter-All' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag == tag))
//   }, [tag])

//   return (

//     <div className="main-div-filter">
//         <div className='text-div'>
//             <h3>WE HAVE 3 PARTY HALL</h3>
//             <p>Guru Banquet <span>– 60 to 125 people</span> <br />
//             Shagun <span>– New one 100 to 300 people</span></p>
//         </div>

//         <div className="images-all" handleSetTag={setTag} >
//           <div className="tags">
//           <TagButton name="Filter-All" handleSetTag={setTag} tagActive={ tag == 'Filter-All' ? true : false} />
//           <TagButton name="Guru Banquet" handleSetTag={setTag} tagActive={ tag == 'Guru Banquet' ? true : false} />
//           <TagButton name="Shagun" handleSetTag={setTag} tagActive={ tag == 'Shagun' ? true : false} />
//           <TagButton name="Table cloths" handleSetTag={setTag} tagActive={ tag == 'Table cloths' ? true : false} />
//           <TagButton name="Napkins availability color" handleSetTag={setTag} tagActive={ tag == 'Napkins availability color' ? true : false} />
//           </div>
//           <div className='container'>
//             {filteredImages.map(image => 
//               <div key={image.id} className='image-card'>
//                 <img className='image' src={`/img/${image.imageName}`} alt="" />
//               </div>)}
          
//           </div>
//         </div>
//     </div>
//   )
// }

// const TagButton = ({ name,handleSetTag,tagActive }) =>{
//   return <button className={`tag ${ tagActive ? 'active' : null}`} onClick={ () => handleSetTag(name)}>{name}</button>;
// }

// export default Filter












import React, { Fragment, useEffect, useState } from 'react'

import "lightgallery/css/lightgallery.css"
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';

import LightGallery from 'lightgallery/react/Lightgallery.es5'

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';

import './Banquet.css'

    const images =[
    
      { id: '1',imageName: 'https://i.ibb.co/Wk68pv2/g1-1.jpg', tag: 'Guru Banquet'},
      { id: '2',imageName: 'https://i.ibb.co/f4YkWK3/g2-1.jpg', tag: 'Guru Banquet'},
      { id: '3',imageName: 'https://i.ibb.co/nnjp8DV/g3.jpg', tag: 'Guru Banquet'},
      { id: '4',imageName: 'https://i.ibb.co/H7K70w8/g4-1.jpg', tag: 'Guru Banquet'},
      { id: '5',imageName: 'https://i.ibb.co/m67rCHH/g5-1.jpg', tag: 'Guru Banquet'},
      { id: '6',imageName: 'https://i.ibb.co/9HDMwtq/g6-1.jpg', tag: 'Guru Banquet'},


        { id: '7',imageName: 'https://i.ibb.co/k8kwKWQ/c7.jpg', tag: 'Table cloths'},
        { id: '8',imageName: 'https://i.ibb.co/kMDNbJW/c11.jpg', tag: 'Table cloths'},
        { id: '9',imageName: 'https://i.ibb.co/7vYfCcN/c10.jpg', tag: 'Table cloths'},
        { id: '10',imageName: 'https://i.ibb.co/QFn6z8B/c9.jpg', tag: 'Table cloths'},
        { id: '11',imageName: 'https://i.ibb.co/25Y6RxQ/c8.jpg', tag: 'Table cloths'},
        { id: '12',imageName: 'https://i.ibb.co/LQZC7zw/c1.jpg', tag: 'Table cloths'},
        { id: '13',imageName: 'https://i.ibb.co/M9TxCHs/c6.jpg', tag: 'Table cloths'},
        { id: '14',imageName: 'https://i.ibb.co/s9FyvkR/c5.jpg', tag: 'Table cloths'},
        { id: '15',imageName: 'https://i.ibb.co/0KNtNkt/c4.jpg', tag: 'Table cloths'},
        { id: '16',imageName: 'https://i.ibb.co/wQbnVfK/c3.jpg', tag: 'Table cloths'},
        { id: '17',imageName: 'https://i.ibb.co/zGKV6tc/c2.jpg', tag: 'Table cloths'},


        { id: '18',imageName: 'https://i.ibb.co/mtnSsbn/n1.jpg', tag: 'Napkins availability color'},
        { id: '19',imageName: 'https://i.ibb.co/1zBggcs/n2.jpg', tag: 'Napkins availability color'},
        { id: '20',imageName: 'https://i.ibb.co/MG88nF8/n3.jpg', tag: 'Napkins availability color'},
        { id: '21',imageName: 'https://i.ibb.co/bPmVC59/n4.jpg', tag: 'Napkins availability color'},
        { id: '22',imageName: 'https://i.ibb.co/pP0Jb9b/n5.jpg', tag: 'Napkins availability color'},
        { id: '23',imageName: 'https://i.ibb.co/GWQXLSv/n6.jpg', tag: 'Napkins availability color'},
        { id: '24',imageName: 'https://i.ibb.co/XbCpW5g/n7.jpg', tag: 'Napkins availability color'},
        { id: '25',imageName: 'https://i.ibb.co/DWZJdZy/n8.jpg', tag: 'Napkins availability color'},
        { id: '26',imageName: 'https://i.ibb.co/bvwj4x5/n9.jpg', tag: 'Napkins availability color'},
        { id: '27',imageName: 'https://i.ibb.co/9vhfBh6/n10.jpg', tag: 'Napkins availability color'},
        { id: '28',imageName: 'https://i.ibb.co/y0HXVxG/n11.jpg', tag: 'Napkins availability color'},
        { id: '29',imageName: 'https://i.ibb.co/b3DZVwr/n12.jpg', tag: 'Napkins availability color'},
        { id: '30',imageName: 'https://i.ibb.co/R7KKXvf/n13.jpg', tag: 'Napkins availability color'},


        { id: '31',imageName: 'https://i.ibb.co/Khj1sqH/s1.jpg', tag: 'Shagun'},
        { id: '32',imageName: 'https://i.ibb.co/FntLHgd/s2.jpg', tag: 'Shagun'},
        { id: '33',imageName: 'https://i.ibb.co/nwQgT9c/s3.jpg', tag: 'Shagun'},
        { id: '34',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
        { id: '35',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
        { id: '36',imageName: 'https://i.ibb.co/JqM15bp/s13.jpg', tag: 'Shagun'},
        { id: '37',imageName: 'https://i.ibb.co/2kNwzwp/s12.jpg', tag: 'Shagun'},
        { id: '38',imageName: 'https://i.ibb.co/c6YgJVt/s11.jpg', tag: 'Shagun'},
        { id: '39',imageName: 'https://i.ibb.co/Qrj52c2/s10.jpg', tag: 'Shagun'},
        { id: '40',imageName: 'https://i.ibb.co/DCR3sVp/s9.jpg', tag: 'Shagun'},
        { id: '41',imageName: 'https://i.ibb.co/cDkfKLr/s8.jpg', tag: 'Shagun'},
        { id: '42',imageName: 'https://i.ibb.co/jrczc1z/s7.jpg', tag: 'Shagun'},
        { id: '43',imageName: 'https://i.ibb.co/qnQnv07/s6.jpg', tag: 'Shagun'},
        { id: '44',imageName: 'https://i.ibb.co/2PPMg0S/s5.jpg', tag: 'Shagun'},
        { id: '45',imageName: 'https://i.ibb.co/Xt38PmQ/s4.jpg', tag: 'Shagun'},

    ]

const Filter = () => {

  const [tag, setTag] = useState('Filter-All');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect( () => {
    tag == 'Filter-All' ? setFilteredImages(images) : setFilteredImages(images.filter( e => e.tag == tag))
  }, [tag])

  return (
    <div className='light-gallery'>
      <div className="tags">
      <TagButton name="Filter-All" handleSetTag={setTag} tagActive={ tag == 'Filter-All' ? true : false} />
      <TagButton name="Guru Banquet" handleSetTag={setTag} tagActive={ tag == 'Guru Banquet' ? true : false} />
      <TagButton name="Shagun" handleSetTag={setTag} tagActive={ tag == 'Shagun' ? true : false} />
      <TagButton name="Table cloths" handleSetTag={setTag} tagActive={ tag == 'Table cloths' ? true : false} />
      <TagButton name="Napkins availability color" handleSetTag={setTag} tagActive={ tag == 'Napkins availability color' ? true : false} />
    </div>
    <div className='container'>
      <LightGallery
       speed={500}
       plugins={[lgZoom,lgAutoplay,lgVideo,lgRotate]}>
       
             {filteredImages.map(e => 
                <img className='image-all image' src={e.imageName}alt="" />
             )}
        

      </LightGallery>
      </div>
    </div>
   
  )
}

const TagButton = ({ name,handleSetTag,tagActive }) =>{
  return <button className={`tag ${ tagActive ? 'active' : null}`} onClick={ () => handleSetTag(name)}>{name}</button>;
}

export default Filter

