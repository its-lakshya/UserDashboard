import useFetch from "../hooks/useFetch";
import UserDetails from "../components/UserDetails";
import { useState, useEffect } from "react";
import { UserDetailsShimmer, UserListShimmer } from "../components/Shimmer";
import UserDetailsModal from "../components/UserDetailsModal";

const Home = () => {

    const  getWindowSize = () => {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const data = useFetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");

    const [selectedUser, setSelectedUser] = useState();
    const [divIndex, setDivIndex] = useState(null)
    const NoImageFound = "https://xsgames.co/randomusers/avatar.php?g=male"
    const onImageError = (e) => {
        e.target.src = NoImageFound
    }
    
    const handleClick = (user, index) => {
        setDivIndex(index);
        setSelectedUser(user);
    }

    if(!data){
        return(
            <UserListShimmer/>
        )
    }
    if(data){
        const reversedData = data.slice(0).reverse();
        return (
            <div className='flex item-center justify-between w-full 2xl:w-[70rem] h-[auto]'>
                <div className='flex flex-col gap-y-4 w-[30rem] max-lg:w-[22rem] max-base:w-full'>
                    <div className="font-bold text-4xl px-4 max-base:flex max-base:justify-center">Users</div>
                    <div className="w-full h-[43rem] overflow-y-scroll flex flex-col justify-start items-center max-base:w-full scrollbar-hide">
                        {reversedData.map((user, index) => {
                            return (
                                <button className={`w-[28rem] max-lg:w-[20rem] max-base:w-5/6 max-xs:w-full my-2 
                                 flex justify-center items-center rounded-md gap-x-12 shadow-lg cursor-pointer
                                shadow-[#696969] hover:transition-transform hover:scale-[105%] hover:duration-100 duration-300 py-2
                                ${divIndex === index ? `bg-[#4BC8FE] border-4 border-white` : `bg-[#e1f3ff]`}`
                                }
                                 key={user.createdAt}
                                onClick={()=>{handleClick(user, index)}}
                                >
                                    <img src={user.avatar ? user.avatar : NoImageFound} alt="user img" onError={onImageError} 
                                    className="w-16 h-16 rounded-full"
                                    />
                                    <div className="flex flex-col justify-center items-start w-32">
                                        <span className="font-bold text-lg">{user.profile.firstName}</span>
                                        <span className="text-sm">{user.profile.username}</span>
                                    </div> 
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className='w-[25rem] max-base:hidden mt-16'>
                    {!selectedUser ? <UserDetailsShimmer/> : <UserDetails data={selectedUser} className='w-[25rem]'/> }
                </div>
                    {windowSize.innerWidth <= 840 && selectedUser ? <UserDetailsModal setSelectedUser = {setSelectedUser} data={selectedUser}/> : null}
            </div>
        )
    }
}

export default Home;