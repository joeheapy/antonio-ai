const AuthLayout = ({ Children }: { Children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {Children}
    </div>
  )
}

export default AuthLayout
