import React, {
  FunctionComponent,
  createContext,
  createElement,
  useCallback,
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

  const hideModal = useCallback(() => {
    setState({
      component: '',
      props: {
        open: false,
      },
    })
  }, [])

  const showModal = useCallback(
    (component: string | FunctionComponent<any>, props: any = {}) => {
      setState({
        component,
        props: {
          ...props,
          open: true,
        },
      })
    },
    []
  )

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
}
