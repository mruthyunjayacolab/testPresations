import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const View = () => {


    let [data, setdata] = useState([])


    useEffect(() => {

        let fechtDatA = async () => {

            let res = await fetch('http://localhost:8000/sticky')
            let data = await res.json();
            setdata(data)

        }
        fechtDatA()
    }, [])

    return (
        <div className="view">

{/* 
            <div>
                <h1>{data.name}</h1>
                <h1>{data.email}</h1>
            </div> */}


            {
                data.map((d) => (

                    <div className="ma">
                        <h1>{d.name}</h1>
                        <h1>{d.email}</h1>
                    </div>
                ))
            }

        </div>
    );
}

export default View;