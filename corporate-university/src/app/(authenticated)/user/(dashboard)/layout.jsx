import Sidebar from "@/components/layout/Sidebar"

const UserDashboardLayout = ({ children }) => {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    )
}

export default UserDashboardLayout