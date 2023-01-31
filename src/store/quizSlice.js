import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        stage: 0,
        asks: [],
        questions: [
            {
                question:
                    "В якому році Чорнобильську атомну електростанцію було запущено в експлуатацію?",
                variants: [1977, 1970, 1986, 1979],
                answer: 1979,
            },
            {
                question: "daskldnkadd ?",
                variants: ["sdf", "sdfds", "1986", "1979"],
                answer: "1979",
            },
            {
                question:
                    "В якому році Чорнобильську атомну електростанцію було запущено в експлуатацію?",
                variants: ["sasdsa", "rewrwr", "Werew", "123"],
                answer: "123",
            },
            {
                question: "daskldnkadd ?",
                variants: ["sdfewe", "sdfwds", "19we86", "1979e"],
                answer: "1979e",
            }
        ],
    },
    reducers: {
        incrementStage(state) {
            state.stage++;
        },
        addAsk(state, action) {
            state.asks.push(action.payload);
        },
    }
});

export const {
    incrementStage,
    addAsk,
} = quizSlice.actions;

export default quizSlice.reducer;