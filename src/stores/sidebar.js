import { reactive, watch } from 'vue'

const savedCollapse = localStorage.getItem('sidebar-collapsed')
const savedDrawer = localStorage.getItem('sidebar-drawer-open')

export const sidebarState = reactive({
  isCollapsed: savedCollapse !== null ? JSON.parse(savedCollapse) : false,
  isDrawerOpen: savedDrawer !== null ? JSON.parse(savedDrawer) : true
})

export const toggleDrawer = () => {
  sidebarState.isDrawerOpen = !sidebarState.isDrawerOpen
}

watch(() => sidebarState.isCollapsed, val => {
  localStorage.setItem('sidebar-collapsed', JSON.stringify(val))
})

watch(() => sidebarState.isDrawerOpen, val => {
  localStorage.setItem('sidebar-drawer-open', JSON.stringify(val))
})
