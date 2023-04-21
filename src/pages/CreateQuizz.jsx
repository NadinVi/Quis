import React from 'react';
import {
  Box, Button, Stack, styled,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { quizzRules } from '../constans/rules';
import { InputText } from '../components/Forms/InputText';
import { quizzezThunks } from '../store/modules/quizzez';

const FormStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const FormStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  marginBottom: theme.spacing(3),
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {},
  '& > *:last-of-type': {
    marginBottom: theme.spacing(4),
  },
}));

export default function CreateQuizz() {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(quizzezThunks.postQuizz(data));
    console.log(data);
  };

  return (
      <FormStyled>
        <FormStack>
          <InputText
            fullWidth
            control={control}
            name='title'
            label='Quizz title'
            variant='outlined'
            rules={quizzRules.title}
          />
          <InputText
            fullWidth
            control={control}
            name='image'
            label='Image link'
            variant='outlined'
            rules={quizzRules.image}
          />
          <InputText
            fullWidth
            control={control}
            name='description'
            label='Description'
            variant='outlined'
            rules={quizzRules.description}
          />
          <Button
            fullWidth sx={{ height: '50px' }}
            onClick={handleSubmit(onSubmit)}
          >
            Add new quizz</Button>
        </FormStack>
      </FormStyled>
  );
}
