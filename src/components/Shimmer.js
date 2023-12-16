export const UserListShimmer = () => {

    const numberOfUsers = [1,2,3,4,5,6,7]

    return (
        <div className='flex item-center justify-between w-full 2xl:w-[70rem] h-[auto] animate-pulse'>
                <div className='flex flex-col gap-y-4 w-[30rem]'>
                    <div className="font-bold text-4xl px-4 h-12"></div>
                    <div className="w-full h-[43rem] overflow-y-scroll flex flex-col justify-start items-center ">
                        {numberOfUsers.map((user) => {
                            return (
                                <button className='w-[28rem] my-2 bg-[#eff9ff] flex justify-center items-center rounded-md gap-x-12 hover:transition-transform hover:scale-[105%] hover:duration-200 py-2' key={user.createdAt}
                                >
                                    <div className="w-16 h-16 rounded-full"></div>
                                    <div className="flex flex-col justify-center items-start w-32">
                                        <span className="font-bold text-lg"></span>
                                        <span className="text-sm"></span>
                                    </div> 
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className='w-[25rem]'>
                    <UserDetailsShimmer/>
                </div>
        </div>
    )
}

export const UserDetailsShimmer = () => {
    return (
        <div className='w-[25rem]'>
                    <div className="mt-16 bg-[#e1f3ff] w-[25rem] text-[#828a92] h-[42rem] flex flex-col justify-center items-center rounded-[2rem] shadow-[#696969] shadow-2xl 
                                py-12 px-6 gap-y-5 animate-pulse">
                        <div className='flex bg-white w-full h-64 rounded-xl p-4 gap-x-3 items-center justify-center'>
                            Click on the user for details
                        </div>
                        <div className="w-full h-24 bg-white rounded-xl p-4 flex flex-col item-center justify-start text-xs overflow-hidden">
                        </div>
                        <div className="w-full h-24 bg-white rounded-xl p-4 flex flex-col item-center justify-center text-xs overflow-hidden gap-y-2">
                            
                        </div>
                        <div className="w-full h-24 bg-white rounded-xl p-4 flex flex-col item-center justify-center text-xs overflow-hidden">
                            
                        </div>
                    </div>
                </div>
    )
};