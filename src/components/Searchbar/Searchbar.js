import React from 'react'

const Searchbar = () => {
    return (
        <div className="pa4-l">
                <fieldset className="cf bn ma0 pa0 w-50 center">
                    <legend className="pa0 f5 f4-ns mb3 black-80">Sign up for our newsletter</legend>
                    <div className="cf">
                        <label className="clip" htmlFor="email-address">Email Address</label>
                        <input
                            className="f6 f5-l input-reset fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br4-ns br--left-ns ba"
                            placeholder="Your Email Address" type="text" name="email-address" value=""
                            id="email-address" />
                        <input
                            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                            type="submit" value="Subscribe" />
                    </div>
                </fieldset>
        </div>
    );
};

export default Searchbar;