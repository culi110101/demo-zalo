import React from "react";
import mainImg from '../assets/img/background-main.png';

const HomePage: React.FunctionComponent = () => {
    return (
        <div className=" flex flex-col justify-center h-screen" >
            <p className="text-[52px] text-shadow text-center mb-[46px] text-[#1F5A60]" >  Lịch vạn niên 2022 </p>
            <img className=" mb-[82px] " src={mainImg} alt="logo" />
            <a className="mx-auto w-fit py-3 px-12 rounded-full bg-[#1F5A60] text-white" href="#">Xem ngay</a>
        </div>
    );
};

export default HomePage;
