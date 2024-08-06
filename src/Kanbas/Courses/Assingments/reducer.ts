import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Assignment interface directly in the reducer file
interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

// Define the state interface for the assignments slice
interface AssignmentState {
  assignments: Assignment[];
}

// Initialize the initial state with an empty assignments array
const initialState: AssignmentState = {
  assignments: [],
};

// Create the assignments slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Define a reducer to set assignments
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    // Define a reducer to add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        ...assignment,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    // Define a reducer to delete an assignment
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    // Define a reducer to update an assignment
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
    // Define a reducer to mark an assignment as being edited
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

// Export the action creators for the reducers
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
  setAssignments,
} = assignmentsSlice.actions;

// Export the reducer as the default export
export default assignmentsSlice.reducer;