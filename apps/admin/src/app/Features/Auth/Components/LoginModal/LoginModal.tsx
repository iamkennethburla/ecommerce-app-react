import { Modal } from '@ecommerce-app/admin/Components'
import { LoginForm } from '../LoginForm/LoginForm'

export function LoginModal() {
  return (
    <Modal
      open
      onClose={() => {
        console.log('closed')
      }}
    >
      <div
        style={{
          width: 'fit-content',
          height: 'auto',
          padding: '20px',
        }}
      >
        <LoginForm />
      </div>
    </Modal>
  )
}
