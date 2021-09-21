import { valueIsEditActions } from "../actions/valueIsEditActions";

export interface IValueAndIsEdit {
  editValue: string;
  isEdit: boolean;
}

export const valueIsEditReducer = (
  state: IValueAndIsEdit,
  action: {
    type: string;
    payload: string;
  }
) => {
  switch (action.type) {
    case valueIsEditActions.EDIT_VALUE: {
      return { ...state, editValue: action.payload };
    }
    case valueIsEditActions.IS_EDIT: {
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    }
  }
  return state;
};
