import React from "react";
import logo from '../assets/logo/logo.svg';

const UserCard: React.FunctionComponent = () => {
    return (
        <div className="lazy__block absolute bottom-0 left-0 top-0 right-0 flex justify-center">
            <img className=" w-60 " src={logo} alt="logo" />
        </div>
    );
};

export default UserCard;
