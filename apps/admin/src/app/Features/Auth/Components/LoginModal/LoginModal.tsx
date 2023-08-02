import { Modal } from '@ecommerce-app/admin/Components'
import { useState } from 'react'
import { LoginForm } from '../LoginForm/LoginForm'

export function LoginModal() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal open={openModal} title="Login" onClose={() => setOpenModal(false)}>
      <div
        style={{
          width: 300,
        }}
      >
        <LoginForm />
      </div>
    </Modal>
  )
}
