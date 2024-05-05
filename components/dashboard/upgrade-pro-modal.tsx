/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 12:17:05
 * @modify date 2024-05-05 12:17:05
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useProStore } from '@/stores/pro-store'
import SubscriptionButton from '../subscription-button'

interface UpgradeProModalProps {
  isProPlan?: boolean
}

const UpgradeProModal: React.FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseProModal } = useProStore()

  return (
    <Dialog open={isOpen}>
      <DialogContent onClose={handleCloseProModal} showOverlay>
        <SubscriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  )
}

export default UpgradeProModal
