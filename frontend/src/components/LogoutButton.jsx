import useLogout from "../hooks/useLogout"


const LogoutButton = () => {
  const { logout} = useLogout()
  return (
    <div >
        <button className="bg-customGreen py-1 px-2 rounded-md" onClick={logout}>Logout</button>
    </div>
  )
}

export default LogoutButton