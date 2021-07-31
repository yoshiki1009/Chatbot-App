import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextInput from './TextInput';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputDescription = (event) => {
    setDescription(event.target.value);
  };

  const submitForm = () => {
    const payload = {
      text:
        'There was an inquiry\n' +
        'Name:' +
        name +
        '\n' +
        'Email:' +
        email +
        '\n' +
        'Content:\n' +
        description,
    };

    fetch(process.env.REACT_APP_WEBHOOK_CONFIG, {
      method: 'post',
      body: JSON.stringify(payload),
    }).then(() => {
      alert('Successfully submitted');
      setName('');
      setEmail('');
      setDescription('');
      return props.handleClose();
    });
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Contact Form</DialogTitle>
      <DialogContent>
        <TextInput
          label={'Name(Required)'}
          multiline={false}
          rows={1}
          value={name}
          type={'text'}
          onChange={inputName}
        />
        <TextInput
          label={'Email(Required)'}
          multiline={false}
          rows={1}
          value={email}
          type={'email'}
          onChange={inputEmail}
        />
        <TextInput
          label={'Inquiry(Required)'}
          multiline={true}
          rows={5}
          value={description}
          type={'text'}
          onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={submitForm} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
