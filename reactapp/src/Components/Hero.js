import React, { Component } from 'react'

class Hero extends Component {
    render() {

        return (
            <>
                <div style={{ textAlign: 'center', display: "flex" }}>
                    <img src="https://media.npr.org/assets/img/2022/12/30/ap22364795346345-2c6120b6fd7a4e91f1b49c8bafa1d3b9ae28e482-s900-c85.webp" style={{ height: "80%", width: '50%' }} />
                    <p style={{ color: "white", alignItems:'center', fontSize:'1.3rem', marginTop:"10%"}}>
                        Cristiano Ronaldo is a well-known football player who is associated with the sport. He was born into a socially deprived household and began playing football at an early age. At 18, he was chosen for the international football squad. Cristiano Ronaldo has become the most famous footballer in the world in a very short period.

                        On the other hand, Cristiano has faced a lot in his life to get to this position. Read on to explore the various aspects of his life.

                    </p>
                </div>

            </>

        )
    }
}

export default Hero;