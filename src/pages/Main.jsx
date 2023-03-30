import { Box, styled } from "@mui/material";
import { Component } from "react";
import { tests } from "../api";
import Card from "../components/Card";

const MainWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
}));

export default class Main extends Component {
    state = {
        testsData: [],
    }

    constructor() {
        super();
    }

    render() {
        return (
            <MainWrapper>
                {this.state.testsData.map(test => (
                    <Card
                        key={test.key}
                        testTitle={test.title}
                        imageSrc={test.image}
                        description={test.description}
                    />
                ))}
            </MainWrapper>
        )
    }

    componentDidMount() {
        tests.fetch()
            .then(tests => this.setState({ ...this.state, testsData: tests.data }));
    }
}

