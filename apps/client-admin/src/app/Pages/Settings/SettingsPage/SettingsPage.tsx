import { PageLayout } from '@ecommerce-app/admin/src/app/Features/Layout/Components'
import { SettingsForm } from '@ecommerce-app/admin/src/app/Features/Settings/Components'
import { Button } from '@ecommerce-app/common-components'
import { MdDeleteOutline } from 'react-icons/md'

export default function SettingsPage() {
  return (
    <PageLayout
      pageTitle="Settings"
      pageHeader="Shop Settings"
      pageSubtitle="Manage store preferences"
      actionComponent={
        <Button
          variant="contained"
          style={{
            background: 'red',
            color: 'white',
            fontSize: 18,
            padding: '4px 6px',
            minWidth: 'fit-content',
          }}
        >
          <MdDeleteOutline />
        </Button>
      }
    >
      <SettingsForm />
    </PageLayout>
  )
}
