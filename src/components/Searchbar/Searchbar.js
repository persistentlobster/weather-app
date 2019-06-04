import React from 'react'

const Searchbar = ({ onChange, onSubmit, onLocation }) => {

    return (
        <div className="pa4-l">
            <form className="mw6 center pa4 pt5">
                <fieldset className="cf bn ma0 pa0 w-100 center">
                    <legend className="pa0 f5 f4-ns mb3 black-80 tl">Enter an address</legend>
                    <div className="cf">
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
                        <a className="fas fa-map-marker-alt f5 pt3 dark-blue no-underline" href="#0" onClick={onLocation}> Use my location</a>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Searchbar;