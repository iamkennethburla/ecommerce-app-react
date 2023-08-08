import { ReactNode, createContext, useState } from 'react'

export interface IModal {
  component: ReactNode | null
  props: { [key: string]: any }
}

interface IUseModalProvider {
  children: React.ReactNode
}

export const ModalContext = createContext({})

export const ModalProvider = ({ children }: IUseModalProvider) => {
  const [state, setState] = useState<IModal>({
    component: null,
    props: {},
  })

  return (
    <ModalContext.Provider
      value={{
        ...state,
        hideModal,
        showModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )

  function showModal(component: ReactNode, props: { [key: string]: any } = {}) {
    setState((prevState) => ({
      ...prevState,
      component,
      props,
    }))
  }

  function hideModal() {
    setState((prevState) => ({
      ...prevState,
      component: null,
      props: {},
    }))
  }
}
