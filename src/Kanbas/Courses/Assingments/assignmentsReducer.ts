import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<any>) => {
      const newAssignment = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<any>) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    // Add any other necessary reducer functions here
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;