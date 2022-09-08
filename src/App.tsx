import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import pic1 from "/Users/matthewwhalen/tasks/src/Images/Fat_Dog.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript and also Matt Whalen
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <h1> This is the header text</h1>

            <img src={pic1} alt="A fat pug" />
            <ol>
                <li>Buy groceries</li>
                <li>Make food</li>
                <li>Dinner time</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"> </div>
                    </Col>
                    <Col>
                        <div className="rectangle"> </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
