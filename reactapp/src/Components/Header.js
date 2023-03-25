import React, { Component } from 'react'

class Header extends Component {
    render() {

        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem' }}>Favorite Sports-Person</h1>
                    <h1 style={{ color: 'red' }}>Cristiano Ronaldo</h1>
                    <p style={{ fontSize: '20px' }}>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League club Al Nassr and the Portugal national team.
                        Born: 5 February 1985 (age 38 years)
                        Ronaldo joined Clube Desportivo Nacional of Madeira and then transferred to Sporting Clube de Portugal (known as Sporting Lisbon), where he played for that club's various youth football (soccer) teams before making his debut on Sporting's first team in 2002. He signed with English powerhouse Manchester United in 2003.
                    </p>
                </div>

            </>

        )
    }
}

export default Header;