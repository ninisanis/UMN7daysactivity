import React, { useState } from "react";
import "./Last.css";

function Last() {
    const status = [
        {
            status: "Kamu Sangat Rajin Kuliah",
        },
        {
            status: "Kamu kurang Rajin Kuliah",
        },
        {
            status: "Kamu tidak Rajin Kuliah",
        },
        {
            status: "Tingkatkan Lagi Belajar nya",
        }
    ];

    const [active, setActive] = useState(0);
    React.useEffect(() => {
        const len = status.length;
        setActive(Math.floor(Math.random() * len));
    }, [setActive]);

    return (
        <div className="last">
            <h1>program telah berakhir</h1>
            <h1>Anda Telah menyelesaikan permainan 7 Days Student</h1>
            <h1>{status[active].status}</h1>
        </div>
    );
}

export default Last;