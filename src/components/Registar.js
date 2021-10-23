import React from 'react';

const Registar = () => {
    return (
        <div>
            <h2>Registar</h2>
            <form onSubmit="">
                <input type="Email" placeholder='your email' /><br />
                <input type="password"  placeholder='your password'/><br />
                <button className='btn-regular'>Submit</button>
            </form>
        </div>
    );
};

export default Registar;