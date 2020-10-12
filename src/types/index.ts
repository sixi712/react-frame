export type State = {
  theme: "white" | "black"
}

interface ISetTheme {
  type: "SET_THEME",
  payload: "white" | "black"
}

interface ISetLanguage {
  type: "SET_LANGUAGE",
  payload: String 
}

export type Action  = ISetTheme | ISetLanguage;
