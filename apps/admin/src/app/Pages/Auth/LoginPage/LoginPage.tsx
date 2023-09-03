import { LoginForm } from '@ecommerce-app/admin/Features/Auth/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { Box } from '@mui/material'

export default function LoginPage() {
  return (
    <PageLayout pageTitle="Login" withHeader={false} withFooter={false}>
      <Box>Login Page</Box>
      <LoginForm />
    </PageLayout>
  )
}
