import back from './assets/back.png'
function Back(){
    return(
        
        <button className='flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium'>
            <img className='h-[20px]' src={back} alt="" />
            Back
        </button>
    )
}

export default Back