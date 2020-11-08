/* SELECTORS */
export const getPromptStatus = ({promptInfo}) => promptInfo.promptStatus;

/* ACTIONS */

//  action name creator
const reducerName = 'promptInfo';
const createActionName = name => `app/${reducerName}/${name}`;

// Action Type
const CHANGE_PROMPT_STATUS = createActionName('CHANGE_PROMPT_STATUS');

// Action creators
export const changePromptStatus = payload => ({...payload, type: CHANGE_PROMPT_STATUS});

// reducer
export default function reducer(statePart = [], action=[] ) {
  switch(action.type) {
    case CHANGE_PROMPT_STATUS:
      return {
        ...statePart,
        promptStatus: action.status,
      };
    default:
      return statePart;
  }
}
