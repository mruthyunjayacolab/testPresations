import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Fetxh = () => {
 //======================================================

    let [data, setdata] = useState([])
    let [name, setname] = useState([])
    let [email, setemail] = useState([])

    let Location = useLocation()
    let nav = useNavigate()
    
    let read = (id) => {

        if (Location.pathname == '/') {
            nav(`${id}`)
        }

    }

    let sub = (e) => {

        e.preventDefault()
        data = { name, email }

        // ====================================================================


        //======================================Add Data Fetch=================================
        fetch('http://localhost:8000/sticky',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        );

        alert(" submited")  

    }

    // ==========================fetching the data============================================
    useEffect(() => {

        let fechtDatA = async () => {

            let res = await fetch('http://localhost:8000/sticky')
            let data = await res.json();
            setdata(data)

        }
        fechtDatA()
    }, [])
    // ========================Deleting from the server=============================================
    let remove = (id) => {

        fetch(`http://localhost:8000/sticky/${id}`,
            {
                method: 'DELETE'
            }
        )
        alert(" Deleted")
    }
    //=======================================================================

    return (

        <div className="from">
            <h1>Fatching</h1>

            <div className="form">

                <form action="" onSubmit={sub}>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                    <button type="submit">Sub</button>
                </form>
            </div>
            {
                data.map((data) => (
                    <div className="ma">

                        <h1>Name:{data.name}</h1>
                        {/* <h1>Id:{data.id}</h1> */}
                        <h1>Email{data.email}</h1>
                        <button onClick={() => remove(data.id)}>Remove</button>
                        <button onClick={() => read(data.id)}>Readmore</button>
                    </div>

                ))
            }
        </div>
    );
}

export default Fetxh;