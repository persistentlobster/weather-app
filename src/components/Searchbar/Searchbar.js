import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

const Searchbar = ({ onChange, onSubmit, onLocation, isLoading }) => {

    return (
            <form className="mw6 center pa4 pt6 mb5 h5">
                <fieldset className="cf bn pa0 w-100 center">
                    <legend className="pa0 f5 f4-ns mb3 black-80 tl">Enter an address</legend>
                    <div className="cf" style={{ maxHeight: '50px' }}>
                        <div className="mb4 mb0-ns flex justify-center">
                            <input placeholder="Ex: Portland, OR"
                                   className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                                   onChange={onChange}
                            />
                            <input type="submit"
                                    className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                    onClick={onSubmit}
                            />
                        </div>
                    </div>
                    <div className="tl">
                        <a className="f5 dark-blue no-underline" href="#0" onClick={onLocation}> 
                            <i className="fas fa-map-marker-alt pt3"></i>
                            &nbsp;Use my location
                        </a>
                    </div>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={40}
                        color={'#000'}
                        loading={isLoading}
                    />
                </fieldset>
            </form>
    );
};

export default Searchbar;