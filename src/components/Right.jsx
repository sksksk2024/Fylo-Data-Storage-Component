function Right() {
  return (
    <>

      <div className='h-full 3xs:w-256W lg:w-464W relative bg-dark-blue py-16P 3xs:pb-48P lg:pb-16P 3xs:px-32P rounded-10BR 3xs:static lg:relative top-26I'>

        <div className="flex 3xs:flex-col 3xs:justify-center lg:flex-row lg:justify-between relative">
          <p className="text-sm 3xs:mb-16M lg:mb-0 text-center">
            You’ve used <span className="text-white">815 GB</span> of your storage
          </p>

          {/* White pop up!!! */}
          {/* var 1 */}
          {/* <div className="3xs:block lg:hidden w-160W flex items-center justify-center gap-2  absolute 3xs:top-124.8I 3xs:right-96I lg:bottom-48I lg:right-80I translate-x-[50%] translate-y-[50%] m-auto bg-white p-8P px-16P rounded-10BR font-bold">
            <span className="text-black text-2xl">185</span> GB Left
          </div> */}

          {/* var 2 */}
          {/* <div className="3xs:hidden lg:block w-160W flex items-center justify-center gap-2  absolute lg:bottom-48I lg:right-80I translate-x-[50%] translate-y-[50%] m-auto bg-white p-8P px-16P rounded-10BR font-bold">
            <span className="text-black text-2xl">185</span> GB Left
            <div className="absolute bottom-0 right-0 translate-x-[0%] translate-y-[50%] w-0 h-0 border-l-[35px] border-l-transparent border-t-[35px] border-t-white 3xs:hidden lg:block"></div>
          </div> */}
          
          {/* var 3 */}
          <div className="w-160W flex items-center justify-center gap-2  absolute 3xs:top-124.8I lg:top-auto 3xs:right-96I lg:bottom-48I lg:right-80I translate-x-[50%] translate-y-[50%] m-auto bg-white p-8P px-16P rounded-10BR font-bold">
            <span className="text-black text-2xl">185</span> GB Left
            <div className="absolute bottom-0 right-0 translate-x-[0%] translate-y-[50%] w-0 h-0 border-l-[35px] border-l-transparent border-t-[35px] border-t-white 3xs:hidden lg:block"></div>
          </div>
        </div>

        <div className="w-full bg-very-dark-blue border-5BW border-very-dark-blue rounded-20BR 3xs:my-16M lg:my-8M">
        <div className="p-1.6P bg-custom-gradient rounded-[20px] w-3/4">
          <div className="rounded-full p-3.2P bg-white w-8W h-8H relative bottom-1.12I 3xs:left-124.8I lg:left-280I translate-x-[10%] translate-y-[10%]"></div>
        </div>
        </div>

        <div className="flex justify-between font-bold text-xs">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
      </div>
    
    </>
  )
}

export default Right
