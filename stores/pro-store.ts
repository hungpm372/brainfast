/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 14:00:28
 * @modify date 2024-05-05 14:00:28
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { create } from 'zustand'

export interface ProState {
  isOpen: boolean
  handleOpenOrCloseProModal: () => void
  handleCloseProModal: () => void
}

export const useProStore = create<ProState>()((set) => ({
  isOpen: false,
  handleOpenOrCloseProModal: () => set((state) => ({ isOpen: !state.isOpen })),
  handleCloseProModal: () => set({ isOpen: false })
}))
