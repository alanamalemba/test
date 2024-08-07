export default function counterReducer(state = 0, action: { type: string }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Invalid action type!");
  }
}
