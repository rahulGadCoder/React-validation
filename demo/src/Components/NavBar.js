import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-dark fixed-top" data-bs-theme="dark">
                <div class="container">
                    <div class="row" style={{height: "40px"}}>
                        <div class="col-2">
                            <img class="img-fluid" src="Intelliswift-LoveNew-Logo-img.png" alt="Company Logo" />
                        </div>
                        <div class="col-8 text-center">
                            <h1 class="text-white">iAutoProv</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
