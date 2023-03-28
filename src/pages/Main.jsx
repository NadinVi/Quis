import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { tests } from "../api";
import Card from "../components/Card";

const MainWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }));

export default function Main() {
    const [testsData, setTests] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await tests.fetch();
                setTests(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <MainWrapper>
            {testsData.map(test => (
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
