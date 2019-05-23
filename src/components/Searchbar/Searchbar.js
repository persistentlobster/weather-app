import React from 'react'

const Searchbar = ({ onChange, onSubmit }) => {
    return (
        <div className="pa4-l">
                <fieldset className="cf bn ma0 pa0 w-100 center">
                    <legend className="pa0 f5 f4-ns mb3 black-80 center">Enter an address</legend>
                    <div className="cf">
                        <div className="mb4 mb0-ns flex justify-center">
                            <input placeholder="Ex: Portland, OR"
                                   className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
                                   onChange={onChange}/>
                            <input type="submit"
                                   className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
                                   onClick={onSubmit} />
                        </div>
                    </div>
                </fieldset>
        </div>
    );
};

export default Searchbar;