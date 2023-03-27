import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <>
                <footer style={{ textAlign: "center",color: "white", background: "black", display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <h3>© Cristiano Ronaldo, All Rights Reserved</h3>
                    </div>
                    <div>
                        <ul style={{display: "flex", gap:"2rem"}}>
                            <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="https://www.facebook.com/cr7cristianoronaldo">Facebook</a></li>
                            <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="https://www.instagram.com/cr7cristianoronaldo">Instagram</a></li>
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;