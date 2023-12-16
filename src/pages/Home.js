import useFetch from "../hooks/useFetch";
import UserDetails from "../components/UserDetails";
import { useState } from "react";
import { UserDetailsShimmer, UserListShimmer } from "../components/Shimmer";

const Home = () => {

    const data = useFetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
    const [selectedUser, setSelectedUser] = useState()
    const NoImageFound = "https://xsgames.co/randomusers/avatar.php?g=male"
    const onImageError = (e) => {
        e.target.src = NoImageFound
    }
    
    const handleClick = (user) => {
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
                <div className='flex flex-col gap-y-4 w-[30rem] max-lg:w-[22rem]'>
                    <div className="font-bold text-4xl px-4">Users</div>
                    <div className="w-full h-[43rem] overflow-y-scroll flex flex-col justify-start items-center ">
                        {reversedData.map((user) => {
                            return (
                                <button className='w-[28rem] max-lg:w-[20rem] my-2 bg-[#e1f3ff] flex justify-center items-center rounded-md gap-x-12 shadow-lg
                                shadow-[#696969] hover:transition-transform hover:scale-[105%] hover:duration-100 duration-300 py-2' key={user.createdAt}
                                onClick={()=>{handleClick(user)}}
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
                <div className='w-[25rem]'>
                    {!selectedUser ? <UserDetailsShimmer/> : <UserDetails data={selectedUser} className='w-[25rem]'/> }
                    {/* <UserDetails data={selectedUser} className='w-[25rem]'/> */}
                </div>
            </div>
        )
    }
}

export default Home;