import React from 'react'
import { useHistory } from 'react-router-dom'

function DeckForm({ changeHandler, submitHandler, formData }) {
    const history = useHistory();
    const goHome = () => {
        history.push("/")
    }

    if (!formData) {
        return <p>Loading...</p>
    } else {
        return (
            <form onSubmit={submitHandler} className="card" style={{ padding: "24px" }}>
                <label htmlFor="name" className="d-flex flex-column">
                    Name:
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder={formData.name}
                        onChange={changeHandler}
                        value={formData.name}
                        required={true}
                    />
                </label>
                <label htmlFor="description" className="d-flex flex-column">
                    Description:
                    <textarea 
                        id="description"
                        type="text"
                        name="description"
                        placeholder={formData.description}
                        onChange={changeHandler}
                        value={formData.description}
                        required={true}
                    />
                </label>
                <div className="d-flex">
                    <button type="button" className="btn btn-secondary" onClick={goHome}> <i class="fa fa-times" aria-hidden="true"></i> Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={submitHandler}><i class="fa fa-paper-plane" aria-hidden="true"></i> Submit</button>
                </div>
                
            </form>
        )
    }
    
}

export default DeckForm