import { Box, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { quizzezThunks } from '../store/modules/quizzez/index';

const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

export default function Main() {
  const { quizzez } = useSelector((state) => state.quizzezReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizzezThunks.fetchQuizzez());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <MainWrapper>
      {quizzez.map((test) => (
        <Card
          key={test.key}
          testTitle={test.title}
          imageSrc={test.image}
          description={test.description}
        />
      ))}
    </MainWrapper>
  );
}
