import React from "react";
import {FaPenSquare, FaRegCircle, FaTimes} from "react-icons/fa"

const Myicons = ({name}) => {
    switch (name) {
        case "cross":
            return <FaTimes className="Icons" />
        case "circle":
            return <FaRegCircle className="Icons" />
        default:
            return <FaPenSquare className="Icons" />

    }
}


export default Myicons