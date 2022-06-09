import useWithStorage from "../../hooks/useWithStorage";

type User = {
  name: string;
  id: string;
  profile_image_url: string;
  phone: string;
  email: string;
  is_admin: boolean;
};

export const initialState = {
  user: {
    name: "",
    id: "",
    profile_image_url: "",
    phone: "",
    email: "",
    is_admin: false,
  },
};

type USERSTATE = {
  user: User;
  dispatchUser: (args: Action) => void;
  removeUser: () => void;
  count: number;
  increment: () => void;
};

// type TypeReducers = {
//   [key: string]: (state: Initial["user"], payload: Action) => Initial;
// };

const typeReducers = {
  SETUSER: (state: Initial["user"], payload: Action) => ({
    ...state,
    user: payload.payload,
  }),
  REMOVELOGIN: (state: Initial["user"], payload: Action) => initialState,
};
type Initial = ReturnType<() => typeof initialState>;

type Action = {
  type: keyof typeof typeReducers;
  payload?: User;
};

const reducer = (state: Initial["user"], payload: Action) =>
  typeReducers[payload.type](state, payload);

const USERSTATE = useWithStorage<USERSTATE>({
  key: "USER",
  function: (set, get) => ({
    user: initialState.user,
    count: 0,
    dispatchUser: (args) => set((state) => reducer(state.user, args)),
    removeUser: () => set(initialState),
    increment: () => set((state) => ({ ...state, count: state.count + 1 })),
  }),
});

export default USERSTATE;
