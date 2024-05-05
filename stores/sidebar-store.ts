/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 02:21:26
 * @modify date 2024-05-05 02:21:26
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
import { create } from 'zustand'

export interface SidebarState {
  isOpen: boolean
  isMinimal: boolean
  handleOpenOrClose: () => void
  handleClose: () => void
  handleToggleMinimal: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  isMinimal: false,
  handleOpenOrClose: () => set((state) => ({ isOpen: !state.isOpen })),
  handleClose: () => set({ isOpen: false }),
  handleToggleMinimal: () => set((state) => ({ isMinimal: !state.isMinimal }))
}))
