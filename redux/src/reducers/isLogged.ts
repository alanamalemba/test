export default function loggedReducer(state = false, action: { type: string }) {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      throw new Error("Invalid action type!");
  }
}
