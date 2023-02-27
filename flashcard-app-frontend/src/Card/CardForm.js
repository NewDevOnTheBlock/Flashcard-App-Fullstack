import React from 'react'
import { useHistory } from 'react-router-dom'

function CardForm({ formData, changeHandler, submitHandler }) {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    }

    if (!formData) {
        return <p>Loading...</p>
    } else {
        return (
            <form onSubmit={submitHandler} className="card" style={{ padding: "24px"}}>
                <label htmlFor="front" className="d-flex flex-column">
                    Front
                    <textarea 
                        id="front"
                        type="text"
                        name="front"
                        placeholder={formData.front}
                        onChange={changeHandler}
                        value={formData.front}
                        required
                    />
                </label>
                <label htmlFor="back" className="d-flex flex-column">
                    Back
                    <textarea 
                        id="back"
                        type="text"
                        name="back"
                        placeholder={formData.back}
                        onChange={changeHandler}
                        value={formData.back}
                        required
                    />
                </label>
                <div>
                    <button type="button" className="btn btn-secondary" onClick={goHome}><i class="fa fa-times" aria-hidden="true"></i> Cancel</button>
                    <button type="submit button" className="btn btn-primary"><i class="fa fa-paper-plane" aria-hidden="true"></i> Submit</button>                
                </div>
            </form>
        )
    }
}

export default CardForm