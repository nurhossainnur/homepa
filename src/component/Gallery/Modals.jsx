const Modals = ({ clickedImg, handleRotationRight,setClickedImg })=>{
    const handleClick = (e) =>{
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return(
        <>
    <div className="overlays dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="photo" />
        <span className="dismiss" onAbort={handleClick}>x</span>

        <div onClick={handleRotationRight}className="overlay-arrows__left" >
            <div>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                   <path 
                   fillRule="evenodd"
                   d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010.414 1.414L6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.
                   41414.293 4.293a1 1 0 010 1.414z"
                   clipRule="evenodd"
                   />
                </svg>
            </div>

        </div>
    </div>
    
    </>
    );
 };
 export default Modals;