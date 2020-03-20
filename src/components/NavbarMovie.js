import React, {useState} from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function NavbarMovie(props) {

    const [keyword, setKeyword] = useState('')

    let onChange = (e) => {
        // console.log(event.target.value)
        setKeyword(e.target.value)
        props.onSearch(e.target.value)
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl onChange={onChange} value={keyword} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={() => props.onSearch(keyword)} variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}