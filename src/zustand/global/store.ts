import useWithStorage from "../../hooks/useWithStorage";

export const initialState = {
  user: {},
  project: {},
};

type USERSTATE = {
  user: {};
  project: {};
};

const USERSTATE = useWithStorage<USERSTATE>({
  key: "USER",
  function: (set, get) => ({
    user: initialState.user,
    project: initialState.project,
  }),
});

export default USERSTATE;
