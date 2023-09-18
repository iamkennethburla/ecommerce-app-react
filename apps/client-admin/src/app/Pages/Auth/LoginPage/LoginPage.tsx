import { Box } from '@mui/material'
import { LoginForm } from 'apps/client-admin/src/app/Features/Auth/Components'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'

export default function LoginPage() {
  return (
    <PageLayout pageTitle="Login" withHeader={false} withFooter={false}>
      <Box>Login Page</Box>
      <LoginForm />
    </PageLayout>
  )
}
