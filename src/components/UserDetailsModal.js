import { createPortal } from "react-dom"
import { RxCross2 } from "react-icons/rx";
import UserDetails from "./UserDetails";

const UserDetailsModal = ({setSelectedUser, data}) => {
    console.log(setSelectedUser, data);

    const handleClick = () => {
        setSelectedUser(null);
    }
    if(data)
    return createPortal(
        <div className='w-full h-auto bg-black bg-opacity-60 flex flex-col items-center justify-center top-0 bottom-0 z-10 fixed max-xs:px-4'>
            <div className='flex flex-col justify-start items-center gap-y-4 '>
                <div  className=' w-full flex items-center justify-end '>
                    <button className='w-6 h-6 bg-[#e1f3ff] rounded-full flex items-center justify-center' onClick={()=> {handleClick()}}><RxCross2  className="text-lg"/></button>
                </div>
                <div className=''>
                    <UserDetails data = {data} className=' bg-green-400'/>
                </div>
            </div>
        </div>,
        document.getElementById("userDetails")
    );
};

export default UserDetailsModal;