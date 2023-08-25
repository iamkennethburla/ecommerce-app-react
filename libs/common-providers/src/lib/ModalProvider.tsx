import React, {
  FunctionComponent,
  createContext,
  createElement,
  useState,
} from 'react'

export interface IModalContextInitialValues {
  component: string | FunctionComponent<any>
  props: any
  hideModal: () => void
  showModal: (component: string | FunctionComponent<any>, props: any) => void
}

export const contextInitialValues: IModalContextInitialValues = {
  component: '',
  props: {},
  hideModal: () => null,
  showModal: () => null,
}

interface IUseModalProvider {
  children: React.ReactNode
}

export const ModalContext =
  createContext<IModalContextInitialValues>(contextInitialValues)

export function ModalProvider({ children }: IUseModalProvider) {
  const [state, setState] = useState<
    Pick<IModalContextInitialValues, 'component' | 'props'>
  >({
    component: '',
    props: {},
  })

  return (
    <ModalContext.Provider
      value={{
        ...state,
        showModal,
        hideModal,
      }}
    >
      {children}
      {state.component !== '' && createElement(state.component, state.props)}
    </ModalContext.Provider>
  )

  function showModal(
    component: string | FunctionComponent<any>,
    props: any = {}
  ) {
    setState({
      component,
      props: {
        ...props,
        open: true,
      },
    })
  }

  function hideModal() {
    setState({
      component: '',
      props: {
        open: false,
      },
    })
  }
}
