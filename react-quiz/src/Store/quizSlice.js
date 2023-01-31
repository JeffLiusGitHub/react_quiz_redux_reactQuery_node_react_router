import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchQuestion, apiSubmitAnswer } from './api';

export const fetchQuestion = createAsyncThunk(
  'quiz/fetchQuestion',
  async (questionId) => {
    const question = await apiFetchQuestion(questionId);
    return question;
  }
);

export const submitAnswer = createAsyncThunk(
  'quiz/submitAnswer',
  async (answer) => {
    const result = await apiSubmitAnswer(answer);
    return result;
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    currentQuestionId: null,
    answers: [],
    score: 0,
    loading: false,
    error: null
  },
  reducers: {
    selectQuestion: (state, action) => {
      state.currentQuestionId = action.payload;
    }
  },
  extraReducers: {
    [fetchQuestion.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchQuestion.fulfilled]: (state, action) => {
      state.questions = [...state.questions, action.payload];
      state.loading = false;
    },
    [fetchQuestion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [submitAnswer.pending]: (state, action) => {
      state.loading = true;
    },
    [submitAnswer.fulfilled]: (state, action) => {
      state.answers = [...state.answers, action.payload];
      state.score = state.answers.filter((answer) => answer.isCorrect).length;
      state.loading = false;
    },
    [submitAnswer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  }
});

export const { selectQuestion } = quizSlice.actions;

export const selectCurrentQuestion = (state) => {
  return state.quiz.questions.find((question) => question.id === state.quiz.currentQuestionId);
};

export default quizSlice.reducer;