import React, { useState, useEffect, useCallback } from 'react';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';
import FormDialog from './components/Forms/FormDialog';
import { db } from './firebase/index';
import defaultDataset from './dataset'; //for test display

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question',
    });
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  };

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === 'contact':
        handleClickOpen();
        break;

      // jump to external website
      case /^https:*/.test(nextQuestionId):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;

      default:
        addChats({
          text: selectedAnswer,
          type: 'answer',
        });

        setTimeout(
          () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
          700
        );

        break;
    }
  };

  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    (async () => {
      const initDataset = {};

      await db
        .collection('questions')
        .get()
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();
            initDataset[id] = data;
          });
        });

      // setDataset(initDataset); set dataset using data fetched from firebase
      setDataset(defaultDataset); //for test display
      // displayNextQuestion(currentId, initDataset[currentId]);
      displayNextQuestion(currentId, defaultDataset[currentId]); //for test display
    })();
  }, []);

  //  auto scroll
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <div>
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          <FormDialog open={open} handleClose={handleClose} />
        </div>
      </section>
    </div>
  );
};

export default App;
